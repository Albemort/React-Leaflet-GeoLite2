import { useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

// LocationList component takes an array of locations and an IP address as props
const LocationList = ({ locations, ip }) => {
  return (
    <div>
      {/* Map through the locations array and render a LocationMarker for each location */}
      {locations.map((location, index) => (
        <LocationMarker
          key={index}           // Unique key for each LocationMarker
          lat={location.lat}    // Latitude of the location
          lng={location.lng}    // Longitude of the location
          ip={ip}               // IP address passed from the parent component
          country={location.country} // Country information of the location
          city={location.city}       // City information of the location
        />
      ))}
    </div>
  )
}

// LocationMarker component represents a single location on the map
const LocationMarker = ({ lat, lng, ip, country, city }) => {
  const markerRef = useRef(null);
  const position = {
    lat: lat,
    lng: lng
  };

  return (
    <Marker position={position} ref={markerRef}>
      {/* Popup that displays information about the location */}
      <Popup minWidth={90}>
        <p>
          IP Address: {ip}<br></br>
          Country: {country}<br></br>
          City: {city}<br></br>
        </p>
      </Popup>
    </Marker>
  )
}

export default LocationList; // Export the LocationList component
