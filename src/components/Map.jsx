import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 20.5937, // Replace with the desired latitude
    lng: 78.9629, // Replace with the desired longitude
  }

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      // Handle script loading errors
      onError={() => console.error('Error loading Google Maps script')}
    >
      {/* Handle authentication errors */}
      {typeof window !== 'undefined' && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          // Handle map initialization errors
          onLoad={() => console.error('Error initializing Google Map')}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </LoadScript>
  )
}

export default Map
