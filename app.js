/-----------------------

function formatTime(currentTime) {
  let currentHours = currentTime.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];

  return `${currentDay}, ${currentHours}:${currentMinutes}`;
}

let formattedDate = document.querySelector(".DayandTime");
formattedDate.innerHTML = formatTime(new Date());
