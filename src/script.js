const apiKey = "1597472685d53a08a5cc16eaa3a5505e"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data.name)
    $(".city").text(data.name)
    $(".temp").text(data.main.temp + "°C")
    $(".humidity").text(data.main.humidity + "%")
    $(".wind").text(data.wind.speed + " km/h")
}

checkweather("berlin")

