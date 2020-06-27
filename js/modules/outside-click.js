export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      events.forEach((eventName) => {
        html.removeEventListener(eventName, handleOutsideClick);
      });

      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    element.setAttribute(outside, "");

    events.forEach((event) => {
      setTimeout(() => {
        html.addEventListener(event, handleOutsideClick);
      });
    });
  }
}
