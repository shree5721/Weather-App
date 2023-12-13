const APIkey = "ab1f211495018c2188bb16ed233cb718";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputElement=document.querySelector("#input")
const searchButton=document.querySelector("#btn")
const weatherIcon=document.querySelector(".weather-icon")

async function Checkweather(city) {
  const response = await fetch(APIurl + city + `&appid=${APIkey}`);
  
  if (response.status==404) {
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather").style.display="none"

  }
  else{
  let data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src='/images/clouds.png'
  }
  if(data.weather[0].main=="Clear"){
    weatherIcon.src='/images/clear.png'
  }
  if(data.weather[0].main=="Rain"){
    weatherIcon.src='/images/rain.png'
  }
  if(data.weather[0].main=="Drizzle"){
    weatherIcon.src='/images/drizzle.png'
  }
  if(data.weather[0].main=="Mist"){
    weatherIcon.src='/images/mist.png'
  }

  document.querySelector(".error").style.display="none"
  document.querySelector(".weather").style.display="block"
  }
  

}
searchButton.addEventListener("click",()=>{
    Checkweather(inputElement.value)
})
