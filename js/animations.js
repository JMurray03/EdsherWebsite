const revealGroups = [
  { selector: "#home .slide-content", direction: "up" },
  { selector: ".about-hero-content", direction: "up" },
  { selector: "#about-page .content-section", direction: "up" },
  { selector: "#our-team-top", direction: "up" },
  { selector: "#team-members .t-mem", direction: "up", stagger: 110 },
  { selector: ".workforce-card", direction: "left" },
  { selector: "#content-section", direction: "left" },
  { selector: "#top-section", direction: "up" },
  { selector: ".service-tab", direction: "up", stagger: 90 },
  { selector: "#quote-content", direction: "left" },
  { selector: "#cl-top", direction: "up" },
  { selector: ".client-proof", direction: "left" },
  { selector: "#client-images img", direction: "right", stagger: 100 },
  { selector: ".contact-hero-inner", direction: "up" },
  { selector: ".contact-panel", direction: "left" },
  { selector: ".contact-form-card", direction: "right" },
  { selector: "site-footer", direction: "up" },
];

const elements = [];

for (const group of revealGroups) {
  document.querySelectorAll(group.selector).forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.dataset.reveal = group.direction;
    if (group.stagger) {
      element.style.setProperty("--reveal-delay", (index * group.stagger) + "ms");
    }
    elements.push(element);
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
  elements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
  );

  elements.forEach((element) => observer.observe(element));
}
