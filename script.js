const month = document.getElementById("months");
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const newYear = "1 jan 2024";

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const months = Math.floor(totalSeconds / 2629746);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);
  month.innerHTML = formatTimer(months);
  day.innerHTML = formatTimer(days);
  hour.innerHTML = formatTimer(hours);
  minute.innerHTML = formatTimer(minutes);
  second.innerHTML = formatTimer(seconds);
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
