import WeatherAPI from "./api/weatherInfo";
import WeatherDisplay from "./domHandler/displayer";
import './style.css'

const weather = WeatherAPI()
const display = WeatherDisplay()


const searchbar = document.querySelector('#location')
const searchBtn = document.querySelector('#search')

display.toggleTheme()
weather.changeLocation('Melbourne Victoria')
let locationData = weather.getWeather()
locationData.then(data => 
    {display.updateLocation(data)
    display.toggleUnit()
    }
)





searchBtn.addEventListener('click', () =>{
    if(searchbar.value){
        console.log('searching for ', searchbar.value)
        weather.changeLocation(searchbar.value)
        locationData = weather.getWeather()
        locationData.then(data => display.updateLocation(data))
    }else{
        alert('please enter a valid value')
    }
})


// weather.changeLocation('Japan')
// weather.getWeather().then(e=>console.log(e))