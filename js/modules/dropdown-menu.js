import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();

    this.classList.toggle("active");

    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((event) => {
      menu.addEventListener(event, handleClick);
    });
  });
}
