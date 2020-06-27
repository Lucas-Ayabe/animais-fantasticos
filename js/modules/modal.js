export default class Modal {
  constructor(btnOpen, btnClose, modal) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.modal = document.querySelector(modal);
    this.activeClass = "is-active";

    this.toggleModalInEvent = this.toggleModalInEvent.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle(this.activeClass);
  }

  toggleModalInEvent(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.modal) {
      this.toggleModal(event);
    }
  }

  bindEvents() {
    this.btnOpen.addEventListener("click", this.toggleModalInEvent);
    this.btnClose.addEventListener("click", this.toggleModalInEvent);
    this.modal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.modal) {
      this.bindEvents();
    }

    return this;
  }
}
