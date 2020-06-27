export default function initOperation() {
  const operation = document.querySelector("[data-week][data-hours]");
  const getInOperation = (key) => operation.dataset[key].split(",").map(Number);

  const operationWeek = getInOperation("week");
  const operationHours = getInOperation("hours");

  const now = new Date();
  const nowDay = now.getDay();
  const nowHours = now.getHours();

  const isWeekOpen = operationWeek.indexOf(nowDay) !== -1;
  const isHoursOpen =
    nowHours >= operationHours[0] && nowHours < operationHours[1];

  if (isWeekOpen && isHoursOpen) {
    operation.classList.add("aberto");
  }
}
