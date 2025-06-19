//your JS code here. If required.
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const apiKey = "YOUR_API_KEY"; // Replace with your real API key
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").textContent =
        `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").textContent =
        "Error fetching weather data.";
      console.error("Fetch error:", error);
    });
}
