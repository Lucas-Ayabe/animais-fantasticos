export default function initAnimateOnScroll() {
  const sections = document.querySelectorAll('[data-animate="scroll"]');

  function animateScroll() {
    const windowHalfHeight = window.innerHeight * 0.6;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = () => sectionTop - windowHalfHeight < 0;

      if (isSectionVisible()) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length > 0) {
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
