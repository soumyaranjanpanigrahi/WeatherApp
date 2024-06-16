const apikey = "535949d7712643e65ea49d61574fcd08";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const info = document.querySelector('.weather-app');
const temp = document.querySelector(".temp");
const humids = document.querySelector(".humids");
const winds = document.querySelector(".winds");
const visibility = document.querySelector(".visibility");
const min = document.querySelector(".MinTemp");
const max = document.querySelector(".MaxTemp");
const condition = document.querySelector(".condition");
const nameOut = document.querySelector(".name");
const humidity = document.querySelector(".humidity");
const feelslike = document.querySelector(".feel");
const wind = document.querySelector(".wind");
const icon = document.querySelector(".icon");
const search = document.querySelector(".srh input");
const btn = document.querySelector(".srh button");
const container = document.querySelector(".container");
const panel = document.querySelector(".panel");
const ul=document.querySelector("ul");
const pressure = document.querySelector(".pressure");
const minmax=document.querySelector(".minmax");
   
async function fetchweatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        alert("City not found, please try again.");
        
    }
    else {
        var data = await response.json();
        nameOut.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "&#176";
        feelslike.innerHTML = Math.round(data.main.feels_like) + "&#176";
        humidity.innerHTML = data.main.humidity + "%";
        humids.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
        winds.innerHTML = data.wind.speed + " km/h";
        minmax.innerHTML=Math.round(data.main.temp_min)+"&#176"+"/"+Math.round(data.main.temp_max)+"&#176";
        visibility.innerHTML=(data.visibility)/1000 + "km";
        min.innerHTML=Math.round(data.main.temp_min)+"&#176";
        max.innerHTML=Math.round(data.main.temp_max)+"&#176";
        pressure.innerHTML=data.main.pressure +" mbar";
        if (data.weather[0].main == "Clouds") {
            icon.src = "cloudy.png";
            info.style.backgroundImage = "url(chuttersnap-rk2s0sm8xF4-unsplash.jpg)";
            condition.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "clear.png";
            info.style.backgroundImage = "url(michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg)";
            condition.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "rain.png";
            info.style.backgroundImage = "url(valentin-muller-bWtd1ZyEy6w-unsplash.jpg)";
            condition.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "drizzle.png";
            info.style.backgroundImage = "url(benjamin-sow-QjR_snVQn4c-unsplash.jpg)";
            condition.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Mist") {
            icon.src = "mist.png";
            info.style.backgroundImage = "url(dave-hoefler-od287vQyufw-unsplash.jpg)";
            condition.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Haze") {
            icon.src = "hazee.png";
            info.style.backgroundImage = "url(istockphoto-1725115970-1024x1024.jpg)";
            condition.innerHTML = data.weather[0].main;
        }
        ul.style.display ="block";
        
    }
}
btn.addEventListener("click", () => {
    fetchweatherData(search.value);
    search.value="";
})
