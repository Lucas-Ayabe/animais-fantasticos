import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = activeClass;
    this.events = events;

    if (events === undefined) {
      this.events = ["click", "touchstart"];
    }

    this.active = this.active.bind(this);
  }

  active(event) {
    const { currentTarget } = event;
    event.preventDefault();

    currentTarget.classList.toggle(this.activeClass);

    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove(this.activeClass);
    });
  }

  bindEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((event) => {
        menu.addEventListener(event, this.active);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.bindEvents();
    }

    return this;
  }
}
