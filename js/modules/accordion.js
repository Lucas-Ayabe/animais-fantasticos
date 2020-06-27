export default function initAccordion() {
  const activeClass = "is-active";
  const accordionList = document.querySelectorAll("[data-accordion] dt");

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length > 0) {
    accordionList[0].classList.toggle(activeClass);
    accordionList[0].nextElementSibling.classList.toggle(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
