export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const tooltipText = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = tooltipText;

    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
    },
  };

  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this);

    tooltipBox.style.left = `${event.pageX + 20}px`;
    tooltipBox.style.top = `${event.pageY + 20}px`;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver);
  });
}
