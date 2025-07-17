const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img")

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;

    //update template 
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;c</span>
    </div>
    `;

    //update Day/Night time & icon
    const iconSrc = `/Public/assets/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);
    
    let timeSrc = weather.IsDayTime ? "/Public/assets/img/day.jpg" : "/Public/assets/img/night.jpg"; 
    time.setAttribute("src", timeSrc);


    //remove d-none if present
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }

}

const updateCity = async (city) => {
    // console.log(city, cityDets.Key);

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
}

cityForm.addEventListener("submit", e => {
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})