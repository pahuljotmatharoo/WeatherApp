const apiKey = "your-key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed * 10)/10 + "km/h";
    document.querySelector(".feelslike").innerHTML = "Feels like " + Math.round(data.main.feels_like) + "°C";

    document.querySelector(".weather").style.display = "block";
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    }
    
}

searchBtn.addEventListener("click", ()=> {
    const city = searchBox.value;
    if (city) {
    checkWeather(city);
    }
    else {
       alert("City input is empty!")
    }
})
