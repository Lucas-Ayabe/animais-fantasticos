export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = "is-active";

  function activeTab(index) {
    const direction = tabContent[index].dataset.animate;

    tabContent.forEach((section) => {
      section.classList.remove(activeClass, section.dataset.animate);
    });

    tabContent[index].classList.add(activeClass, direction);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
