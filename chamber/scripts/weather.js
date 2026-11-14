const apiKey = "7e115445f6e1309dd38f1368c4a69456";

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Oaxaca,mx&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;

async function getWeather() {

    // Current Weather
    const currentResponse = await fetch(currentWeatherURL);
    const currentData = await currentResponse.json();

    displayWeather(currentData);

    // Forecast
    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    displayForecast(forecastData);
}

function displayWeather(data) {

    const currentWeather = document.querySelector("#current-weather");

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const icon = data.weather[0].icon;

    const iconURL =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

    currentWeather.innerHTML = `
        <img src="${iconURL}" alt="${description}">

        <p><strong>${temperature}°C</strong></p>

        <p>${description}</p>
    `;
}

function displayForecast(data) {

    const forecast = document.querySelector("#forecast");

    let html = `
        <h3>3-Day Forecast</h3>
    `;

    const forecastDays = [
        data.list[8],
        data.list[16],
        data.list[24]
    ];

    forecastDays.forEach(day => {

        const date = new Date(day.dt_txt);

        const dayName = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        const temperature = Math.round(day.main.temp);

        html += `
            <p>${dayName}: ${temperature}°C</p>
        `;
    });

    forecast.innerHTML = html;
}

getWeather();
