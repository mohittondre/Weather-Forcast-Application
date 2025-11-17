
# Weather Forecast Application

## Overview
This is a responsive Weather Forecast Application built using JavaScript, HTML, and CSS (with Tailwind CSS). It fetches real-time weather data from the OpenWeatherMap API to provide location-based forecasts, current weather conditions, and a 5-day extended forecast. The app features a creative, user-friendly interface with dynamic backgrounds, weather icons, and interactive elements like temperature toggles and recent search history.

The application is designed for desktop, tablet (e.g., iPad Mini), and mobile (e.g., iPhone SE) devices, ensuring full responsiveness. It includes error handling, validation, and custom alerts for a seamless user experience.

## Features
- **Location-Based Search**: Search for weather by city name or use geolocation for current location.
- **Current Weather Display**: Shows temperature, humidity, wind speed, weather description, and icons. Includes a toggle for °C/°F (only for today's temperature).
- **5-Day Forecast**: Displays extended forecasts with date, temperature, humidity, wind speed, and relevant icons in a visually appealing card layout.
- **Dynamic Backgrounds**: Body background changes for rainy conditions; forecast cards have dynamic backgrounds based on weather (e.g., blue for rain, yellow for clear skies).
- **Recent Searches**: Dropdown menu for recently searched cities, stored in localStorage.
- **Extreme Temperature Alerts**: Custom pop-up alerts for temperatures above 40°C.
- **Error Handling**: Graceful handling of API errors, invalid inputs, and geolocation issues with custom pop-ups (no browser alerts).
- **Responsive Design**: Optimized for desktop, iPad Mini (768px width), and iPhone SE (375px width).
- **Creative UI**: Modern card-based layout with gradients, hover effects, and weather-themed icons.

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Tailwind CSS for styling and responsiveness, with custom CSS for animations and dynamic backgrounds.
- **JavaScript**: Logic for API integration, event handling, DOM manipulation, and localStorage.
- **OpenWeatherMap API**: For fetching weather data (current and forecast).
- **Weather Icons**: Library for weather condition icons.
- **Version Control**: Git for tracking changes (with meaningful commit messages).

## Installation and Setup
1. **Clone the Repository**:
   ```
   git clone Weather Forecast Application
   cd Weather-Forecast-Application
   ```

2. **Project Structure**:
   - `index.html`: Main HTML file.
   - `styles.css`: Custom CSS for dynamic backgrounds and responsiveness.
   - `script.js`: JavaScript for functionality.
   - `README.md`: This documentation file.

3. **API Key Setup**:
   - Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api).
   - Obtain your API key.
   - In `script.js`, replace `'4f22458649848a353d8b5b9c895701ae'` with your actual API key:
     ```javascript
     const apiKey = '4f22458649848a353d8b5b9c895701ae';
     ```

4. **Run the Application**:
   - Open `index.html` in a modern web browser (e.g., Chrome, Firefox).
   - No server required; it's a client-side app.
   - Ensure internet connection for API calls.

5. **Dependencies**:
   - Tailwind CSS is loaded via CDN in `index.html`.
   - Weather Icons are included via CDN.
   - No additional installations needed.

## Usage
1. **Search by City**:
   - Enter a city name (e.g., "New York") in the input field.
   - Click "Search" to fetch and display current weather and 5-day forecast.
   - Invalid or empty inputs will show a custom error pop-up.

2. **Current Location**:
   - Click "Current Location" to use geolocation.
   - Grant browser permission for location access.
   - Displays weather for your current position.

3. **Recent Searches**:
   - Select a city from the dropdown to quickly re-fetch its weather.
   - Cities are saved in localStorage and persist across sessions.

4. **Temperature Toggle**:
   - For today's temperature, click "Toggle °C/°F" to switch units.
   - Forecast temperatures remain in °C.

5. **Viewing Forecasts**:
   - Current weather appears in a dedicated section.
   - 5-day forecast shows in cards with dynamic backgrounds (e.g., blue for rain).

6. **Error Handling**:
   - If a city isn't found or API fails, a pop-up appears with details.
   - Close the pop-up to continue.

## Contributing
- Fork the repository.
- Create a feature branch.
- Commit changes with meaningful messages (e.g., "Add dynamic card backgrounds").
- Push and create a pull request.

## License
This project is for educational purposes. Feel free to use and modify.

## Contact
If you have questions or issues, reach out via GitHub issues.
