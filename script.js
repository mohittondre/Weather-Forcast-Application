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


