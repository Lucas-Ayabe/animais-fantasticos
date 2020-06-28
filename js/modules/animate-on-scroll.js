import debounce from "./debounce.js";

export default class ScrollAnimate {
  constructor(sections, activeClass) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalfHeight = window.innerHeight * 0.6;
    this.activeClass = activeClass;

    this.checkDistances = debounce(this.checkDistances.bind(this), 50);
  }

  getDistances() {
    this.distances = [...this.sections].map((section) => {
      return {
        element: section,
        offset: Math.floor(section.offsetTop - this.windowHalfHeight),
      };
    });
  }

  checkDistances() {
    this.distances.forEach((distance) => {
      if (window.pageYOffset > distance.offset) {
        distance.element.classList.add(this.activeClass);
      } else if (distance.element.classList.contains(this.activeClass)) {
        distance.element.classList.remove(this.activeClass);
      }
    });
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
      this.getDistances();
      this.checkDistances();

      window.addEventListener("scroll", this.checkDistances);
    }

    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistances);
  }
}
