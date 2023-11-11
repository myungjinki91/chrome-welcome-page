const clock = document.querySelector(".clock");

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return { hours, minutes, seconds };
}

function updateClock() {
  const { hours, minutes, seconds } = getTime();
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  clock.innerText = timeString;
}

updateClock();
setInterval(updateClock, 1000);
