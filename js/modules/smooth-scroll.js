export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    this.options = options;

    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  init() {
    if (this.internalLinks.length > 0) {
      this.addLinkEvent();
    }

    return this;
  }

  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);

    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: 'smooth'
    // });
  }
}
