const apiKey = '807d442f94e7a8b3a2cedc35e3319e92'; // Replace with your API key

function getWeather() {
  const location = document.getElementById('location').value;

  if (!location) {
    alert("Please enter a city name.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl) 
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert("City not found.");
        return;
      }

      const cityName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.getElementById('city-name').textContent = cityName;
      document.getElementById('temperature').textContent = `${temperature}°C`;
      document.getElementById('description').textContent = description;
      document.getElementById('details').innerHTML = `Humidity: ${humidity}%, Wind Speed: ${windSpeed} m/s`;

      document.getElementById('weather-info').style.display = 'block';
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data.");
    });
}