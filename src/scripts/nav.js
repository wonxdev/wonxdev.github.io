const MOBILE_QUERY = "(max-width: 992px)";

export function initNav() {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("nav-toggle");
  const overlay = document.getElementById("nav-overlay");

  if (!sidebar || !toggle || !overlay) return;

  const mobileQuery = window.matchMedia(MOBILE_QUERY);
  const navLinks = sidebar.querySelectorAll(".nav-links a");

  const isMobile = () => mobileQuery.matches;
  const isOpen = () => document.documentElement.classList.contains("nav-open");

  function getFocusable() {
    return [toggle, ...sidebar.querySelectorAll("a[href], button:not([disabled])")];
  }

  function syncInert() {
    const shouldHide = isMobile() && !isOpen();
    sidebar.toggleAttribute("inert", shouldHide);
    sidebar.setAttribute("aria-hidden", String(shouldHide));
  }

  function onKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeNav({ restoreFocus: true });
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusable();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openNav() {
    document.documentElement.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    syncInert();
    document.addEventListener("keydown", onKeydown);
  }

  function closeNav({ restoreFocus = false } = {}) {
    document.documentElement.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    syncInert();
    document.removeEventListener("keydown", onKeydown);
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => {
    if (isOpen()) {
      closeNav({ restoreFocus: true });
    } else {
      openNav();
    }
  });

  overlay.addEventListener("click", () => closeNav());

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMobile()) closeNav();
    });
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) closeNav();
    else syncInert();
  });

  syncInert();
}
