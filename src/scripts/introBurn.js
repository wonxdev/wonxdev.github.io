const BURN_MS = 850;
const EMBER_TAIL_MS = 250;
// Safety ceiling only - normal runs finish the moment the last ember fades (see step()),
// this just guarantees the overlay can never be pinned open by a stray particle.
const HARD_MAX_MS = 1600;
const COLUMNS = 48;
const JITTER_PX = 70;
// The front travels past the top edge by this much so it exits the visible viewport (and
// stops being drawn) well before the ease-in-out curve's tail decelerates to a crawl -
// otherwise it visually stalls just below the edge for a beat before vanishing.
const OVERSHOOT_PX = 160;
const BASE_FILL = "#08070c";
const CHAR_COLOR = "rgba(12, 7, 5, 0.92)";
const GLOW_INNER = "#ffd86b";
const GLOW_OUTER = "rgba(255, 139, 94, 0.55)";
const EMBER_COLORS = ["#ffd86b", "#ff8b5e", "#f7c95c"];

// Cheap layered-sine "value noise" - reads as organic jitter without a real Perlin implementation.
function noiseAt(column, elapsed) {
  const n1 = Math.sin(elapsed * 0.0021 * column.freq + column.phase);
  const n2 = Math.sin(elapsed * 0.0037 * column.freq + column.phase2) * 0.5;
  return (n1 + n2) / 1.5;
}

export function initIntroBurn() {
  const host = document.getElementById("intro-burn");
  const canvas = document.getElementById("intro-burn-canvas");
  const particleCanvas = document.getElementById("intro-burn-particles");
  if (!host || !canvas || !particleCanvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  const particleCtx = particleCanvas.getContext("2d");
  if (!ctx || !particleCtx) {
    host.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Two layers: `canvas` holds the persistent burn mask (its punched-out holes must
  // survive across frames), `particleCanvas` holds the embers and is fully cleared and
  // redrawn every frame - otherwise every past ember position stays baked into the
  // pixels forever (since we never clear the shared canvas) and the whole smear just
  // vanishes in one frame when the overlay is removed, instead of each ember fading.
  [canvas, particleCanvas].forEach((c) => {
    c.width = Math.floor(width * dpr);
    c.height = Math.floor(height * dpr);
  });
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  particleCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.fillStyle = BASE_FILL;
  ctx.fillRect(0, 0, width, height);

  function cleanup() {
    host.remove();
  }

  if (reduceMotion) {
    requestAnimationFrame(() => host.classList.add("intro-burn-fade"));
    window.setTimeout(cleanup, 260);
    return;
  }

  const columns = Array.from({ length: COLUMNS + 1 }, () => ({
    phase: Math.random() * Math.PI * 2,
    phase2: Math.random() * Math.PI * 2,
    freq: 1.4 + Math.random() * 2.4,
  }));

  let particles = [];

  function spawnEmber(x, y) {
    particles.push({
      x: x + (Math.random() - 0.5) * 16,
      y,
      vx: (Math.random() - 0.5) * 44,
      vy: -(50 + Math.random() * 90),
      age: 0,
      life: 240 + Math.random() * 260,
      size: 1.5 + Math.random() * 2.2,
      color: EMBER_COLORS[(Math.random() * EMBER_COLORS.length) | 0],
    });
  }

  function frontPoints(eased, elapsed) {
    const points = [];
    const travel = height + OVERSHOOT_PX;
    for (let i = 0; i <= COLUMNS; i++) {
      const x = (i / COLUMNS) * width;
      const jitter = noiseAt(columns[i], elapsed) * JITTER_PX * (0.35 + eased * 0.65);
      const y = travel * (1 - eased) - OVERSHOOT_PX + jitter;
      points.push([x, y]);
    }
    return points;
  }

  // True once the front (plus its glow/jitter margin) has fully cleared the top of the
  // viewport - after this the edge is invisible, so further redraws would be wasted work.
  function frontOffscreen(points) {
    return points.every(([, y]) => y < -60);
  }

  function drawBurn(points) {
    // Punch the covered area below the front out of the overlay, revealing the page underneath.
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.moveTo(0, height);
    points.forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Glow + charred edge sit directly on the boundary just carved out above.
    ctx.save();
    ctx.beginPath();
    points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.shadowBlur = 22;
    ctx.shadowColor = GLOW_OUTER;
    ctx.strokeStyle = GLOW_INNER;
    ctx.globalAlpha = 0.55;
    ctx.lineWidth = 9;
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 0.9;
    ctx.strokeStyle = CHAR_COLOR;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }

  function updateEmbers(dt) {
    particleCtx.clearRect(0, 0, width, height);

    particles = particles.filter((p) => p.age < p.life);
    particles.forEach((p) => {
      p.age += dt;
      p.x += p.vx * (dt / 1000);
      p.y += p.vy * (dt / 1000);
      p.vy += 60 * (dt / 1000);

      const t = p.age / p.life;
      particleCtx.globalAlpha = Math.max(0, 1 - t);
      particleCtx.fillStyle = p.color;
      particleCtx.shadowBlur = 6;
      particleCtx.shadowColor = p.color;
      particleCtx.beginPath();
      particleCtx.arc(p.x, p.y, p.size * (1 - t * 0.5), 0, Math.PI * 2);
      particleCtx.fill();
    });
    particleCtx.globalAlpha = 1;
  }

  let start = null;
  let lastTs = null;
  const totalMs = BURN_MS + EMBER_TAIL_MS;

  function step(ts) {
    try {
      if (start === null) {
        start = ts;
        lastTs = ts;
      }
      const elapsed = ts - start;
      const dt = ts - lastTs;
      lastTs = ts;

      const progress = Math.min(1, elapsed / BURN_MS);
      // Ease-in-out: the burn catches gradually, spreads fastest through the middle, then settles.
      const eased =
        progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;

      // Stop drawing the glowing/charred edge as soon as it's off-screen, rather than
      // waiting for progress to hit 1 - the ease-in-out tail crawls near the end, so waiting
      // for exact completion makes the edge visibly stall at the top before it vanishes.
      if (progress < 1) {
        const points = frontPoints(eased, elapsed);

        if (!frontOffscreen(points)) {
          drawBurn(points);

          if (Math.random() < 0.6) {
            const i = (Math.random() * points.length) | 0;
            const [x, y] = points[i];
            spawnEmber(x, y);
          }
        }
      }

      updateEmbers(dt);

      // Keep going past the nominal tail window if embers are still mid-fade, so the
      // overlay never gets yanked away while a particle is still visibly alight - but
      // never past HARD_MAX_MS, in case something keeps spawning/reviving particles.
      const stillSettling = elapsed < totalMs || particles.length > 0;
      if (stillSettling && elapsed < HARD_MAX_MS) {
        requestAnimationFrame(step);
      } else {
        cleanup();
      }
    } catch {
      cleanup();
    }
  }

  requestAnimationFrame(step);
}
