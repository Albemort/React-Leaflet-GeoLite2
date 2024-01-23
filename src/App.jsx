import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationList from './LocationList';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const base_url = 'http://localhost:3001/api/get_location';

const App = () => {
  // State to hold location data and client's IP address
  const [locations, setLocations] = useState([]);
  const [ip, setIP] = useState('');

  // Center the map to Finland's coordinates
  const center = {
    lat: 64.9631,
    lng: 26.0709
  };

  useEffect(() => {
    // Fetch the client's IP address
    axios.get('https://api.ipify.org/?format=json')
      .then(response => {
        const clientIP = response.data.ip;
        setIP(clientIP); // Set the client's IP address in the state

        // Fetch location data using the client's IP address
        axios.post(base_url, { ip: clientIP })
          .then(response => {
            // Format the location data
            const formattedLocation = {
              city: response.data.city.names.en,
              country: response.data.country.names.en,
              lat: response.data.location.latitude,
              lng: response.data.location.longitude
            };
            // Update the locations state with the new location data
            setLocations(prevLocations => [...prevLocations, formattedLocation]);
          })
          .catch(error => {
            console.error('Error in POST request:', error);
          });
      })
      .catch(error => {
        console.error('Error getting IP address:', error);
      });
  }, []); // Run the effect only once when the component mounts

  return (
    // Render the MapContainer with TileLayer and LocationList components
    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationList locations={locations} ip={ip} /> {/* Render the LocationList component */}
    </MapContainer>
  );
};

export default App;
