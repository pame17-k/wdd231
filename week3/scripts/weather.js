const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data._____}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${______}@2x.___`;
  const desc = data.weather[0].______;
  weatherIcon.setAttribute('___', _____);
  weatherIcon.setAttribute('___', _____);
  captionDesc.textContent = desc;
}