
const WeatherDisplay = () => {

    const unit = ['°C', '°F'] 
    let selectedUnit = unit[0]
    let current_data = []

    const toggleUnit = () => {
        const current = document.querySelector('#toggleTemp')
        if(current_data){
            current.addEventListener('change', e => {
                selectedUnit = e.target.checked ? unit[1] : unit[0]
                console.log(e.target.checked)
                if(current_data){
                    updateLocation(current_data)
                }
            })
        }
        
    };

    const toggleTheme = () => {
        const current = document.querySelector('#toggleTheme')
        const all = document.querySelector('body')
        current.addEventListener('change', e => {
            all.className = e.target.checked ? 'theme-light' : 'theme-dark'  
            console.log(e.target.checked)
        })
    }


    const updateLocation = (data) => {
        if(data){
            current_data = data
            const unit = selectedUnit == '°C' ?  'metric' : 'imperial'
            const speed = selectedUnit == '°C' ?  'kph' : 'mph'
            const depth = selectedUnit == '°C' ?  'mm' : 'in'
            const location = document.querySelector('.location')
            if(data.city === data.region){
                location.innerHTML = `<h1 class="location">${data.city}, ${data.country} </h1>`
            } else{
                location.innerHTML = `<h1 class="location">${data.city}, ${data.region}, ${data.country} </h1>`
            }
            
            const topSection = document.querySelector('.top-weather')
            const bottomSection = document.querySelector('.bottom')
            topSection.innerHTML = 
                `
                    <section class="temprature">
                        <h1 class="bigTemp">${data[unit].temp}<span class="temp-sign">${selectedUnit}</span></h1>
                        <h2 class="feels">Feels Like <span class="feels-like">${data[unit].feels}</span><span class="temp-sign">${selectedUnit}</span></h2>
                    </section>
                    <section class="weather-desc">
                        <h3 class="description">${data.condition}</h3>
                        <img src="${data.img}" alt="${data.condition}" class="weather-img">
                    </section>
                `
            bottomSection.innerHTML = 
                `
                <ul class="details">
                    <li class="detail-individual">
                        <p>UV index <span id="uv">${data.uv}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Cloud % <span id="cloud">${data.cloud}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Wind <span id="wind">${data[unit].wind} ${speed}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Wind Direction <span id="winDir">${data.wind_dir}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Precipitation <span id="Prec">${data[unit].precip}${depth}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Air Quality (CO) <span id="Air">${data.air_co}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Humidity <span id="Humi">${data.humidity}</span></p>
                    </li>
                    <li class="detail-individual">
                        <p>Gust<span id="Gust">${data[unit].gust} ${speed}</span></p>
                    </li>
                </ul>
                `


        } else {
            alert('Could not find location Data')
            console.log('data not available')
        }
    }




    return {updateLocation, toggleUnit, toggleTheme}
}

export default WeatherDisplay