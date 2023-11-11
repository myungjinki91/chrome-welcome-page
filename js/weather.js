const API_KEY = "af44cf156114f538f3e2c7845fd6fa54";
const currentWeather = document.querySelector(".weather span:last-child");
const city = document.querySelector(".weather span:first-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      currentWeather.innerText = `${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
