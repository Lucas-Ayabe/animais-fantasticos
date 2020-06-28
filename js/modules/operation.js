export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  getInDataset(key) {
    return this.operation.dataset[key].split(",").map(Number);
  }

  setData() {
    this.operationWeek = this.getInDataset("week");
    this.operationHours = this.getInDataset("hours");
  }

  setNowData() {
    this.now = new Date();
    this.nowDay = this.now.getDay();
    this.nowHours = this.now.getUTCHours() - 3;
  }

  isOpen() {
    const isWeekOpen = this.operationWeek.indexOf(this.nowDay) !== -1;
    const isHoursOpen =
      this.nowHours >= this.operationHours[0] &&
      this.nowHours < this.operationHours[1];
    return isWeekOpen && isHoursOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.setData();
      this.setNowData();
      this.activeOpen();
    }

    return this;
  }
}
