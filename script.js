const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const feel_like = document.querySelector('.feellike span');
const humidity = document.querySelector('.humidity span');
const sea_Level = document.querySelector('.SeaLevel span');
const wind_Guests = document.querySelector('.WindGuests span');
const Pressure = document.querySelector('.Pressure span');
const Feel_likeleft = document.querySelector('.Feellikeleft span');
const Wind_Speed = document.querySelector('.WindSpeed span');

async function checkWeather(city) {
    const api_key = "6c886922af11951ad006f99dc6ea0ba9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(url);
        const weather_data = await response.json();

        if (weather_data.cod === 200) {
            // Update the UI with the fetched data
            document.querySelector('.searchplacename').textContent = weather_data.name;
            document.querySelector('.date').textContent = new Date().toLocaleDateString();
            weather_img.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;
            description.textContent = weather_data.weather[0].description;
            temperature.textContent = `${weather_data.main.temp}°C`;
            feel_like.textContent = `${weather_data.main.feels_like}°C`;
            humidity.textContent = `${weather_data.main.humidity}%`;
            sea_Level.textContent = weather_data.main.sea_level ? `${weather_data.main.sea_level} hPa` : 'N/A';
            wind_Guests.textContent = weather_data.wind.gust ? `${weather_data.wind.gust} m/s` : 'N/A';
            Pressure.textContent = `${weather_data.main.pressure} hPa`;
            Feel_likeleft.textContent = `${weather_data.main.feels_like}°C`;
            Wind_Speed.textContent = `${weather_data.wind.speed} m/s`;
        } else {
            alert('Location not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data. Please try again later.');
    }
}

searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a location.');
    }
});
