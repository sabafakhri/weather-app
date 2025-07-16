const express = require('express');
const fetch = require('node-fetch'); // Use require for CommonJS
const app = express();
const port = 3000;


const ACCUWEATHER_API_KEY  = "e9AG46ASZjKIO1N4xAsh2rD1AhsnKCWp";

app.use(express.static('public')); 

// Create a new endpoint for getting city data
app.get('/api/city/:city', async (req, res) => {
    
    const city = req.params.city;
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCUWEATHER_API_KEY}&q=${city}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch city data' });
    }
});

// Create a new endpoint for getting weather data
app.get('/api/weather/:key', async (req, res) => {

    const locationKey = req.params.key;
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ACCUWEATHER_API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});


app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});