function displayWeatherDetails()
{
    document.querySelector('.card').style.display='block';
    document.querySelector('#details').style.display='block';
    document.querySelector('#units').style.display='block';
    document.querySelector('#error').style.display='none';
    let city = document.querySelector('#search').value;
    let apiKey='431b8d5968f02b0a16f8e0252cf4b2ae';
    if (!city) {
        document.querySelector('#details').style.display='none';
        console.error('City is not defined');
        alert('City is not defined');
        return;
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey)
    .then((data) => {
        let result = data.json();
        console.log(result)
        return result;
    })
    .then((result) => {
        document.querySelector('#cityName').innerText = city;
        let temperatureC = (result?.main?.temp - 273.15).toFixed(1);
            console.log(`Temperature in °C= ${temperatureC}`);
            document.querySelector('#temperature').innerText = `${temperatureC}°C`;
            
            let feelsLikeC = (result?.main?.feels_like - 273.15).toFixed(1);
            console.log(`Feels Like= ${feelsLike}`);
            document.querySelector('#feelsLike').innerText = `${feelsLikeC}°C`;
            
            let minC = (result?.main?.temp_min - 273.15).toFixed(1);
            console.log(`Min= ${min}`);
            document.querySelector('#min').innerText = `${minC}°C`;
            
            let maxC = (result?.main?.temp_max - 273.15).toFixed(1);
            console.log(`Max= ${max}`);
            document.querySelector('#max').innerText = `${maxC}°C`;
        document.querySelector('#celcius').addEventListener('click', function(){
            let temperatureC = (result?.main?.temp - 273.15).toFixed(1);
            console.log(`Temperature in °C= ${temperatureC}`);
            document.querySelector('#temperature').innerText = `${temperatureC}°C`;
            
            let feelsLikeC = (result?.main?.feels_like - 273.15).toFixed(1);
            console.log(`Feels Like= ${feelsLike}`);
            document.querySelector('#feelsLike').innerText = `${feelsLikeC}°C`;
            
            let minC = (result?.main?.temp_min - 273.15).toFixed(1);
            console.log(`Min= ${min}`);
            document.querySelector('#min').innerText = `${minC}°C`;
            
            let maxC = (result?.main?.temp_max - 273.15).toFixed(1);
            console.log(`Max= ${max}`);
            document.querySelector('#max').innerText = `${maxC}°C`;
        });
        
        document.querySelector('#farenheit').addEventListener('click', function(){
            let temperatureF = ((result?.main?.temp - 273.15) * 9/5 + 32).toFixed(1);
            console.log(`Temperature in °F= ${temperatureC}`);
            document.querySelector('#temperature').innerText = `${temperatureF}°F`;
            
            let feelsLikeF = ((result?.main?.feels_like - 273.15) * 9/5 +32).toFixed(1);
            console.log(`Feels Like= ${feelsLike}`);
            document.querySelector('#feelsLike').innerText = `${feelsLikeF}°F`;
            
            let minF = ((result?.main?.temp_min - 273.15) * 9/5 +32).toFixed(1);
            console.log(`Min= ${min}`);
            document.querySelector('#min').innerText = `${minF}°F`;
            
            let maxF = ((result?.main?.temp_max - 273.15) * 9/5 +32).toFixed(1);
            console.log(`Max= ${max}`);
            document.querySelector('#max').innerText = `${maxF}°F`;
        });
        
        let humidity = result?.main?.humidity
        console.log(`Humidity= ${humidity}%`);
        document.querySelector('#humidity').innerText = `${humidity}%`;

        let conditions = (result?.weather[0]?.main);
        console.log(`Conditions = ${conditions}`);
        document.querySelector('#conditions').innerText = `${conditions}`;
        if(conditions =='Rain')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
        }
        if(conditions =='Clear')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-sun"></i>`;
        }
        if(conditions =='Snowfall')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
        }
        if(conditions =='Smoke')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-smog"></i>`;
        }
        if(conditions =='Clouds')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-clouds"></i>`;
        }
        if(conditions =='Haze')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-sun-haze"></i>`;
        }
        if(conditions =='Drizzle')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-cloud-drizzle"></i>`;
        }
        if(conditions =='Fog')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-cloud-drizzle"></i>`;
        }
        if(conditions =='Tornado')
        {
            document.querySelector('#condition').innerHTML = `<i class="fa-solid fa-tornado"></i>`;
        }
        

    })
    .catch(error => handleError());
}
function handleError()
{
    document.querySelector('#error').style.display='block';
    document.querySelector('#details').style.display='none';
}


document.querySelector('#check').addEventListener('click', displayWeatherDetails);

document.querySelector('#search').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        displayWeatherDetails();
    }
});

document.querySelector('#celcius').addEventListener('click',displayWeatherDetails);

window.addEventListener('load', function() {
    document.querySelector('#search').focus();
});