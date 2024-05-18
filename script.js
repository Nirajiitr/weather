const apiKey ="0c3b4639d5095422c4e1953182239968";
const city = "purnia"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".search input");
const btn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");



async function chechWeather (city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

    }else{
      document.querySelector(".weather").style.display="block";
    var data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
   if(data.weather[0].main=="Clouds"){
     weatherIcon.src="./images/clouds.png";
   }
   else if(data.weather[0].main=="Clear"){
    weatherIcon.src="./images/clear.png";
  } else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="./images/drizzle.png";
  } else if(data.weather[0].main=="Rain"){
    weatherIcon.src="./images/rain.png";
  } else if(data.weather[0].main=="Snow"){
    weatherIcon.src="./images/snow.png";
  } else if(data.weather[0].main=="Mist"){
    weatherIcon.src="./images/mist.png";
  }
}
}
chechWeather(city);
btn.addEventListener("click", ()=>{
   
  chechWeather(input.value);
   
});


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    btn.click(); 
  }
});
