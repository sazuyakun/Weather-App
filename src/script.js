const apiKey = "1597472685d53a08a5cc16eaa3a5505e"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const weatherIcon = $(".weather-icon")
const searchBox = $(".search button")
const searchBtn = $(".search input")

async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data.name)
    $(".city").text(data.name)
    $(".temp").text(data.main.temp + "°C")
    $(".humidity").text(data.main.humidity + "%")
    $(".wind").text(data.wind.speed + " km/h")

    if(data.weather[0].main == "Clouds"){
        weatherIcon.attr("src", "images/clouds.png")
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.attr("src", "images/clear.png")
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.attr("src", "images/rain.png")
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.attr("src", "images/drizzle.png")
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.attr("src", "images/mist.png")
    }
    else{
        weatherIcon.attr("src", "images/snow.png")
    }
}

checkweather("berlin")

searchBox.on("click", function(){
    checkweather(searchBtn.val());
    $(".weather").removeClass("hidden")
})



