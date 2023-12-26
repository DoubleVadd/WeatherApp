import WeatherAPI from "./api/weatherInfo";
const weather = WeatherAPI()


weather.changeLocation('Japan')
weather.getWeather().then(e=>console.log(e))