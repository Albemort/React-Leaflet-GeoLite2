import LocationMarker from './LocationMarker';

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

export default LocationList; // Export the LocationList component
