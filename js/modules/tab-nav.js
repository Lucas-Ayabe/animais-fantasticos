export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "is-active";
  }

  activeTab(index) {
    const direction = this.tabContent[index].dataset.animate;

    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass, section.dataset.animate);
    });

    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  bindEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.bindEvent();
      this.activeTab(0);
    }

    return this;
  }
}
