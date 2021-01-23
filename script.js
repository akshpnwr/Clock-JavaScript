const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

let secDeg;
let minuteDeg;
let hourDeg;

const init = function () {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  hourDeg = hour * 30 + minute * 0.5;
  minuteDeg = minute * 6;
  secDeg = second * 6;
  hourHand.style.setProperty("--rotate", `${hourDeg}deg`);
  minuteHand.style.setProperty("--rotate", `${minuteDeg}deg`);
  secondHand.style.setProperty("--rotate", `${secDeg}deg`);
};
init();

setInterval(() => {
  hourDeg += 0.0084;
  minuteDeg += 0.1;
  secDeg += 6;

  hourHand.style.setProperty("--rotate", `${hourDeg}deg`);
  minuteHand.style.setProperty("--rotate", `${minuteDeg}deg`);
  secondHand.style.setProperty("--rotate", `${secDeg}deg`);
}, 1000);
