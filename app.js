document.getElementById("btn").addEventListener("click",getWeather);
var tempElement = document.querySelector(".temperature-value p");
var descElement = document.querySelector(".temperature-description p");
var locationElement = document.querySelector(".location p");
var notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
/*if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}*/

// GET WEATHER FROM API PROVIDER
function getWeather(){
    //let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
     var searchName=document.getElementById("cityName").value
     let api = `http://api.openweathermap.org/data/2.5/forecast?q=${searchName}&appid=${key}`
    fetch(api)
        .then(function(response){
            let data = response.json();
            //console.log(data);
        })
	
        .then(function(data){
	        if(document.getElementById("day").value == "A"){
	    	weather.temperature.value = Math.floor(data.list[0].main.temp - KELVIN);
            	weather.description = data.list[0].weather.description;
            	//weather.city = searchName;
            	//weather.country = data.sys.country;
	    }
		else if(document.getElementById("day").value == "B"){
	    	weather.temperature.value = Math.floor(data.list[5].main.temp - KELVIN);
            	weather.description = data.list[5].weather.description;
            	//weather.city = searchName;
            	//weather.country = data.sys.country;
	    }
		else if(document.getElementById("day").value == "C"){
	    	weather.temperature.value = Math.floor(data.list[13].main.temp - KELVIN);
            	weather.description = data.list[13].weather.description;
            	//weather.city = searchName;
            	//weather.country = data.sys.country;
	    }	    
		else if(document.getElementById("day").value == "D"){
	    	weather.temperature.value = Math.floor(data.list[21].main.temp - KELVIN);
            	weather.description = data.list[21].weather.description;
            	//weather.city = searchName;
            	//weather.country = data.sys.country;
	    }
		else if(document.getElementById("day").value == "E"){
	    	weather.temperature.value = Math.floor(data.list[29].main.temp - KELVIN);
            	weather.description = data.list[29].weather.description;
            	//weather.city = searchName;
            	//weather.country = data.sys.country;
	    }		
		else{
	    weather.temperature.value = Math.floor(data.Promise.PromiseValue.list[37].main.temp - KELVIN);
            weather.description = data.Promise.PromiseValue.list[37].weather.description;
            //weather.city = data.name;
            //weather.country = data.sys.country;
	    }
	    
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    tempElement.innerHTML = `${weather.temperature.value}<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

}