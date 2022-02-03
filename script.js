const dateEl = document.querySelector(".date");
const days = ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"];

const init = function () {
  let date = new Date();
  let ampm = date.getHours() > 12 ? "PM" : "AM";
  let hour = date.getHours() % 12;
  hour = hour < 10 ? "0" + hour : hour;
  const markup = `${
    days[date.getDay() - 1]
  } ${hour}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`;
  dateEl.innerHTML = "";
  dateEl.insertAdjacentHTML("afterbegin", markup);
};
init();
setInterval(function () {
  init();
}, 1000);
