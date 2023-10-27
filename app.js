const mainImage = document.querySelector('.main-image');

const searchCity = ()=>{
        const searchValue = document.querySelector('.search-input').value;
        const API_KEY = "5e01f1f7f5e9dc95b180942234b00098";
        const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const URL = (API_URL + searchValue + `&appid=${API_KEY}`);
      
        async function api_data() {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);

            document.querySelector('.city-name').innerHTML=data.name;
            document.querySelector('.temp').innerHTML=Math.round( data.main.temp) + "&deg C";
            document.querySelector('.humidityy').innerHTML=data.main.humidity;
            document.querySelector('.wind').innerHTML=data.wind.speed+ "km/hr";
            
            if(data.weather[0].main == "Clear"){
                mainImage.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Clouds"){
                mainImage.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                mainImage.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                mainImage.src = "images/mist.png";
            }
            else if(data.weather[0].main == "Rain"){
                mainImage.src = "images/rain.png";
            }
            // else if(data.weather[0].main == "Snow"){
            //     mainImage.src = "images/snow.png";
            // }
        }
        api_data();
     
          
}
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=5e01f1f7f5e9dc95b180942234b00098&units=metric