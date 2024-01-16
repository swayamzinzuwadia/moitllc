// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
  const position = [25.271139, 55.309915]; // New coordinates for the specified address
  // const yourCustomIcon = new L.Icon.Default();
  
  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <MapContainer center={position} zoom={15} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} >
        <Popup>
          Taqniyah IT Solutions <br />
          Twin Towers - Unit 1202, Office 28, 12th Floor <br />
          37a Baniyas Rd - Deira - Dubai - United Arab Emirates
        </Popup>
      </Marker> 
    </MapContainer>

  //   <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
  //   <TileLayer
  //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   <Marker position={position}>
  //     <Popup>
  //       A pretty CSS3 popup. <br /> Easily customizable.
  //     </Popup>
  //   </Marker>
  // </MapContainer>
  );
};


export default MapComponent;



