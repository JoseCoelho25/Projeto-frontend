import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map=()=>{
    return (
        <div className="pl-24 mr-8">
        <MapContainer center={[41.2696, -8.0826]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.2696, -8.0826]}>
        <Popup>
      Stand Carrocinha
        </Popup>
        </Marker>
      </MapContainer>
      </div>
    );
}

export default Map;

