export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const tooltipText = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = tooltipText;

    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  onMouseMove({ pageX, pageY }) {
    const left = pageX + 240 > window.innerWidth ? pageX - 190 : pageX + 20;

    this.tooltipBox.style.top = `${pageY + 20}px`;
    this.tooltipBox.style.left = `${left}px`;
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  bindEvents() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.bindEvents();
    }

    return this;
  }
}
