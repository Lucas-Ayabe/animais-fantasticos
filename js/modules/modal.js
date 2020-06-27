export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const modal = document.querySelector('[data-modal="container"]');
  const activeClass = "is-active";

  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle(activeClass);
  }

  function clickOutsideModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (btnOpen && btnClose && modal) {
    btnOpen.addEventListener("click", toggleModal);
    btnClose.addEventListener("click", toggleModal);
    modal.addEventListener("click", clickOutsideModal);
  }
}
