const btn = document.querySelector('.Weatherbtn');
const cityInput = document.querySelector('.cityInput');
const cityName = document.querySelector('.city .value');
const temp = document.querySelector('.temp .value');
const description = document.querySelector('.description .value');

async function getData() {
    const citytext = cityInput.value.trim();
    const key = "65a62caedac025c64c16b2e1fb836bcf";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citytext}&appid=${key}&units=metric`;

    if (!citytext) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        cityName.textContent = data.name;
        temp.textContent = `${data.main.temp}°C`;
        description.textContent = data.weather[0].description;

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("City not found or API error!");
    }
}

btn.addEventListener('click', getData);
