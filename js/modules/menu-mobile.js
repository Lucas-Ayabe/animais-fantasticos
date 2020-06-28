import outsideClick from "./outside-click";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = events;

    if (events === undefined) this.events = ["click", "touchstart"];

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add("active");
    this.menuList.classList.add("active");

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove("active");
      this.menuList.classList.remove("active");
    });
  }

  bindEvents() {
    this.events.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.bindEvents();
    }

    return this;
  }
}
