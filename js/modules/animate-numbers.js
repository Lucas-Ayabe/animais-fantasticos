export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(numberElement) {
    const total = +numberElement.innerText;
    const increment = Math.floor(total / 100);

    let start = 0;

    const timer = setInterval(() => {
      start += increment;

      numberElement.innerText = start;

      if (start > total) {
        numberElement.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animateNumbers() {
    this.numbers.forEach(this.constructor.incrementNumber);
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);

    this.observer.observe(this.observerTarget, {
      attributes: true,
    });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
