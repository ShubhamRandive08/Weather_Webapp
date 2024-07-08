const apiKey = "53abe1c71867d3a8e7f3ffe16a54dcf1"; // API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // API URL

const searchBox = document.querySelector('.search input'); // Get the value from the input box
const searchBtn = document.querySelector('.search button'); // 
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) { // async function for the check weather.
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) { // If the city name can be invalid and this city data are not prasent on the api then display the error.
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json();

        console.log(data); //Print the data on the console if we needed other wise not.

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"; // Temp
        document.querySelector('.humidity').innerHTML = data.main.humidity + " %"; // Humidity
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"; // Wind

        //Display the perticular img based on the weather.
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "img/cloud.png";
        }

        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "img/clear.png";
        }

        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "img/rain.png";
        }

        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "img/drizzle.png";
        }

        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "img/mist.png";
        }

        // document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    }



}

// Trigger the click event on the button of the search.
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value); // Pass the city name as a parameter.
})


