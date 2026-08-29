// Get HTML elements

const searchForm =
    document.getElementById("searchForm");

const cityInput =
    document.getElementById("cityInput");

const loading =
    document.getElementById("loading");

const errorMessage =
    document.getElementById("errorMessage");

const weatherResult =
    document.getElementById("weatherResult");

const cityName =
    document.getElementById("cityName");

const date =
    document.getElementById("date");

const temperature =
    document.getElementById("temperature");

const condition =
    document.getElementById("condition");

const humidity =
    document.getElementById("humidity");

const windSpeed =
    document.getElementById("windSpeed");

const feelsLike =
    document.getElementById("feelsLike");

const cloudCover =
    document.getElementById("cloudCover");


// ======================================
// SEARCH CITY
// ======================================

searchForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();

        const city =
            cityInput.value.trim();

        if (city === "") {
            return;
        }

        await getWeather(city);
    }
);


// ======================================
// GET WEATHER
// ======================================

async function getWeather(city) {

    try {

        // Show loading
        loading.style.display = "block";

        // Hide previous error
        errorMessage.style.display = "none";


        // ==================================
        // STEP 1: GET CITY COORDINATES
        // ==================================

        const locationURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;


        const locationResponse =
            await fetch(locationURL);


        // Check network response
        if (!locationResponse.ok) {

            throw new Error(
                "Unable to connect to the location service."
            );
        }


        // Convert response to JSON
        const locationData =
            await locationResponse.json();


        // Check if city exists
        if (
            !locationData.results ||
            locationData.results.length === 0
        ) {

            throw new Error(
                "City not found. Please enter a valid city name."
            );
        }


        // Get first city result
        const location =
            locationData.results[0];


        const latitude =
            location.latitude;

        const longitude =
            location.longitude;


        // ==================================
        // STEP 2: GET WEATHER DATA
        // ==================================

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,cloud_cover,wind_speed_10m&timezone=auto`;


        const weatherResponse =
            await fetch(weatherURL);


        if (!weatherResponse.ok) {

            throw new Error(
                "Unable to retrieve weather data."
            );
        }


        // Convert JSON response
        const weatherData =
            await weatherResponse.json();


        // ==================================
        // STEP 3: DISPLAY DATA
        // ==================================

        displayWeather(
            location,
            weatherData
        );


    } catch (error) {

        // Error handling
        showError(error.message);

    } finally {

        // Hide loading
        loading.style.display = "none";
    }
}


// ======================================
// DISPLAY WEATHER
// ======================================

function displayWeather(
    location,
    weatherData
) {

    const current =
        weatherData.current;


    // City
    cityName.textContent =
        `${location.name}, ${location.country}`;


    // Date and time
    date.textContent =
        current.time;


    // Temperature
    temperature.textContent =
        Math.round(current.temperature_2m);


    // Weather condition
    condition.textContent =
        getWeatherCondition(
            current.weather_code
        );


    // Humidity
    humidity.textContent =
        `${current.relative_humidity_2m}%`;


    // Wind speed
    windSpeed.textContent =
        `${current.wind_speed_10m} km/h`;


    // Feels like
    feelsLike.textContent =
        `${Math.round(
            current.apparent_temperature
        )}°C`;


    // Cloud cover
    cloudCover.textContent =
        `${current.cloud_cover}%`;


    // Show weather
    weatherResult.style.display =
        "block";
}


// ======================================
// WEATHER CODE
// ======================================

function getWeatherCondition(code) {

    if (code === 0) {
        return "☀️ Clear Sky";
    }

    if (code === 1 ||
        code === 2 ||
        code === 3) {

        return "⛅ Partly Cloudy";
    }

    if (code === 45 ||
        code === 48) {

        return "🌫️ Fog";
    }

    if (
        code >= 51 &&
        code <= 57
    ) {

        return "🌦️ Drizzle";
    }

    if (
        code >= 61 &&
        code <= 67
    ) {

        return "🌧️ Rain";
    }

    if (
        code >= 71 &&
        code <= 77
    ) {

        return "❄️ Snow";
    }

    if (
        code >= 80 &&
        code <= 82
    ) {

        return "🌧️ Rain Showers";
    }

    if (
        code === 95
    ) {

        return "⛈️ Thunderstorm";
    }

    if (
        code === 96 ||
        code === 99
    ) {

        return "⛈️ Thunderstorm with Hail";
    }

    return "Weather information available";
}


// ======================================
// ERROR MESSAGE
// ======================================

function showError(message) {

    errorMessage.textContent =
        message;

    errorMessage.style.display =
        "block";

    weatherResult.style.display =
        "none";
}