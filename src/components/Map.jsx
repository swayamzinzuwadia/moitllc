// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [25.271139, 55.309915]; // New coordinates for the specified address

  return (
    <MapContainer center={position} zoom={15} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Taqniyah IT Solutions <br />
          Twin Towers - Unit 1202, Office 28, 12th Floor <br />
          37a Baniyas Rd - Deira - Dubai - United Arab Emirates
        </Popup>
      </Marker> 
    </MapContainer>
  );
};


export default MapComponent;



