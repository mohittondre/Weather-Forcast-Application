const apiKey = '4f22458649848a353d8b5b9c895701ae'; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const currentLocationBtn = document.getElementById('currentLocationBtn');
const recentSearches = document.getElementById('recentSearches');
const currentWeather = document.getElementById('currentWeather');
const forecast = document.getElementById('forecast');
const errorPopup = document.getElementById('errorPopup');
const errorMessage = document.getElementById('errorMessage');
const closeError = document.getElementById('closeError');
const unitToggle = document.getElementById('unitToggle');

let isCelsius = true; // For temperature toggle
let recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
let currentTempCelsius = null; // Store original temp in Celsius for accurate toggling

// Update recent searches dropdown
function updateRecentSearches() {
    recentSearches.innerHTML = '<option value="">Recently Searched Cities</option>';
    recentCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        recentSearches.appendChild(option);
    });
}
updateRecentSearches();

// Show error pop-up
function showError(message) {
    errorMessage.textContent = message;
    errorPopup.classList.remove('hidden');
}

// Close error pop-up
closeError.addEventListener('click', () => {
    errorPopup.classList.add('hidden');
});


// Fetch weather data
async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found or API error');
        return await response.json();
    } catch (error) {
        showError(error.message);
        return null; // Return null on error to handle gracefully
    }
}

// Display current weather
function displayCurrentWeather(data) {
    currentTempCelsius = Math.round(data.main.temp - 273.15); // Store in Celsius for toggle
    const temp = isCelsius ? currentTempCelsius : Math.round(currentTempCelsius * 9/5 + 32);
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `${temp}°${isCelsius ? 'C' : 'F'}`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('windSpeed').textContent = data.wind.speed;
    document.getElementById('weatherIcon').className = `wi wi-owm-${data.weather[0].id}`;
    
    // Dynamic background: Add/remove 'rainy' class without disrupting other body classes
    if (data.weather[0].main.toLowerCase() === 'rain') {
        document.body.classList.add('rainy');
    } else {
        document.body.classList.remove('rainy');
    }

       // Extreme temp alert (in Celsius)
    if (currentTempCelsius > 40) {
        showError('Extreme heat alert: Temperature above 40°C!');
    }
    
    currentWeather.classList.remove('hidden');
}

// Display 5-day forecast (always in °C, no toggle)
function displayForecast(data) {
    const forecastCards = document.getElementById('forecastCards');
    forecastCards.innerHTML = '';
    const dailyData = data.list.filter((item, index) => index % 8 === 0); // Every 24 hours
    
    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000).toDateString();
        const temp = Math.round(day.main.temp - 273.15);
        
        // Determine dynamic background based on weather condition
        let bgClass = 'bg-white'; // Default
        const condition = day.weather[0].main.toLowerCase();
        if (condition.includes('rain') || condition.includes('snow')) {
            bgClass = 'bg-gradient-to-br from-blue-200 to-blue-400';
        } else if (condition.includes('clear')) {
            bgClass = 'bg-gradient-to-br from-yellow-200 to-yellow-400';
        } else if (condition.includes('cloud')) {
            bgClass = 'bg-gradient-to-br from-gray-200 to-gray-400';
        }
        
        const card = document.createElement('div');
        card.className = `${bgClass} p-4 rounded-lg shadow hover:shadow-lg transition text-gray-800`; // Added text color for contrast
        card.innerHTML = `
            <p class="font-semibold">${date}</p>
            <i class="wi wi-owm-${day.weather[0].id} text-3xl"></i>
            <p>${temp}°C</p>
            <p><i class="wi wi-humidity"></i> ${day.main.humidity}%</p>
            <p><i class="wi wi-strong-wind"></i> ${day.wind.speed} m/s</p>
        `;
        forecastCards.appendChild(card);
    });
    forecast.classList.remove('hidden');
}





