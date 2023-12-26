const WeatherAPI = () => {
    const DONT = ''
    const PLS = ''
    const T = '0c884'
    const E = '52bb051'
    const S = '926f1c65'
    const L = 6232512
    const A = '521'

    const AK = DONT+S+T+E+A+L+PLS

    let location = 'Australia'

    const changeLocation = (NewLocation) =>  location = NewLocation

    const processData = (data) => {
        return {
            metric:{
                temp: data.current.temp_c,
                feels: data.current.feelslike_c,
                wind: data.current.wind_kph,
                precip: data.current.precip_mm,
                gust: data.current.gust_kph,
                pressure: data.current.pressure_mb,

            },
            imperial:{
                temp: data.current.temp_f,
                feels: data.current.feelslike_f,
                wind: data.current.wind_mph,
                precip: data.current.precip_in,
                gust: data.current.gust_mph,
                pressure: data.current.pressure_in,
            },
            humidity:data.current.humidity,
            uv:data.current.uv,
            cloud:data.current.cloud,
            wind_dir:data.current.wind_dir,
            condition:data.current.condition.text,
            img:data.current.condition.icon,
            air_co:data.current.air_quality.co,
            city: data.location.name,
            region: data.location.region,
            country: data.location.country
        }
        
    }

    const getWeather = async() =>{
        try{
            console.log('getting weather information for', location)
            const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${AK}&q=${location}&aqi=yes`)
            const processed = await data.json()
            return processData(processed)
        }catch(err){
            console.log(err)
            return null
        }
    }


    return {changeLocation, getWeather}

};

export default WeatherAPI