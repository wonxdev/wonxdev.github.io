const email = "nathansuwiji@gmail.com";

export const site = {
  name: "wonxdev",
  owner: "Nathan Suwiji",

  github: "https://github.com/wonxdev",
  linkedin: "https://www.linkedin.com/in/nathansuwiji/",
  email,
  // Opens Gmail's compose window directly instead of relying on the OS's default mailto handler.
  emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
  // TODO: add a hosted resume PDF once available
  resume: "",

  year: new Date().getFullYear(),
};
