async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // 🔁 Replace this with your actual OpenWeatherMap API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const weather = data.weather[0].main;

    document.getElementById('weatherData').textContent =
      `Current weather in ${city}: ${weather}`;
  } catch (error) {
    document.getElementById('weatherData').textContent =
      'Failed to fetch weather data.';
    console.error('Error:', error);
  }
}