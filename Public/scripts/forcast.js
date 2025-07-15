//get weather info
const getWeather = async (id) => {
    
    const response = await fetch (`/api/weather/${id}`);
    const data = await response.json();
    return data[0];

}

//get city info
const getCity = async (city) => {

    const response = await fetch (`/api/city/${city}`);
    const data = await response.json();
    return data[0];
}


// getCity("espoo").then(data => {
//     return getWeather(data.Key);
//     }).then(data => {
//         console.log(data);
//     }).catch(err => console.log(err))