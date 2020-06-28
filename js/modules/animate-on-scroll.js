export default class ScrollAnimate {
  constructor(sections, activeClass) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalfHeight = window.innerHeight * 0.6;
    this.activeClass = activeClass;

    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = () => sectionTop - this.windowHalfHeight < 0;

      if (isSectionVisible()) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.sections.length > 0) {
      this.animateScroll();

      window.addEventListener("scroll", this.animateScroll);
    }
  }
}
