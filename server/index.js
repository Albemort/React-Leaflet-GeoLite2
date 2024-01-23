const express = require('express');
const app = require('express')();
const cors = require('cors');
const Reader = require('@maxmind/geoip2-node').Reader;
const bodyParser = require('body-parser');

app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse incoming JSON requests using body-parser

const port = 3001;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Function to get location data based on an IP address
const GetLocation = async (ip) => {
  try {
    const reader = await Reader.open('data/GeoLite2-City.mmdb');
    const response = reader.city(ip);
    // console.log(response);

    return response;
  } catch (error) {
    console.error('Error in GetLocation:', error);
    throw error;
  }
};

// Function to handle the location retrieval process
const handleLocation = async (ip) => {
  try {
    const location = await GetLocation(ip);
    //console.log('Location:', location);
    return location;
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
  }
};

// Route to handle POST requests for getting location data
app.post('/api/get_location', async (req, res) => {
  try {
    const clientIpAddress = req.body.ip;

    //console.log(clientIpAddress);

    const response = await handleLocation(clientIpAddress);

    //console.log(response);

    res.json(response);
  } catch (error) {
    console.error('Error in POST request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
