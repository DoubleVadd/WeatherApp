
const WeatherDisplay = () => {

    const unit = ['°C', '°F'] 





    const updateLocation = (data, selectedUnit='°C') => {
        if(data){
            const unit = selectedUnit == '°C' ?  'metric' : 'imperial'
            const topSection = document.querySelector('.top')
            const bottomSection = document.querySelector('.bottom')

            topSection.innerHTML = 
            ` <section class="searchBar">
                    <h1 class="location">${data.city},${data.region},${data.country} </h1>
                    <p class="changeLoc">
                        <input type="text" id="location" placeholder="Change Location">
                        <button id="search">Search</button>
                    </p>
                </section>
                <section class="temprature">
                    <h1 class="bigTemp">${data[unit].temp}<span class="temp-sign">${selectedUnit}</span></h1>
                    <h2 class="feels">Feels Like<span class="feels-like">${data[unit].feels}</span><span class="temp-sign">${selectedUnit}</span></h2>
                </section>
                <section class="weather-desc">
                    <h3 class="description">${data.condition}</h3>
                    <img src="${data.img}" alt="${data.condition}" class="weather-img">
                </section>
            
            `


        } else {
            console.log('data not available')
        }
    }




    return {updateLocation}
}

export default WeatherDisplay