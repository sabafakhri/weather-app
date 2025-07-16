//get weather info
const accuweatherKey = "GN7RGAQcs7GyEKJ9Ka0G1MKWPQTOwHMJ"

const getWeather = async (id) => {
    
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `?${id}apikey=${accuweatherKey}`

    const response = await fetch (base + query);
    const data = await response.json();
    return data[0];
    // console.log(data)

}

//get city info
const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${accuweatherKey}&q=${city}`;

    const response = await fetch (base + query);
    const data = await response.json();
    return data[0];
    // console.log(data)
}


getCity("espoo").then(data => {
    // console.log(data.Key)
    const id = (data.Key)
    return getWeather(id);
    }).then(data => {
        console.log(data);
    }).catch(err => console.log(err))