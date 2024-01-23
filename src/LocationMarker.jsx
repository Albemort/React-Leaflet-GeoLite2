import { useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

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

  
export default LocationMarker;