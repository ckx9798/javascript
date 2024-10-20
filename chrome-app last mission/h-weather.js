function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_key = "0a2f0f6e6e07573041c6d5041f2e0f74";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const weatherSpan = document.querySelector("#weather span:first-child");
      const citySpan = document.querySelector("#weather span:last-child");
      citySpan.innerText = data.name;
      weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  console.log("Can`t find your Geo");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
