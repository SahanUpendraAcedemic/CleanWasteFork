import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// Map container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Fallback map center (Sri Lanka's center)
const defaultCenter = {
  lat: 7.8731,
  lng: 80.7718,
};

const Map = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState(defaultCenter); // Marker position
  const [center, setCenter] = useState(defaultCenter); // Map center position

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Your Google Maps API Key
  });

  // Get user's current location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
          setMarkerPosition({ lat: latitude, lng: longitude });
          onLocationSelect({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    }
  }, [onLocationSelect]);

  // Handle map click to update marker position
  const onMapClick = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkerPosition({ lat, lng });
      onLocationSelect({ latitude: lat, longitude: lng });
    },
    [onLocationSelect]
  );

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12} // Zoom level when showing user's location
      onClick={onMapClick} // Update marker on map click
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
};

export default Map;
