import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 51.1472672, 
    lng: 17.0805971,
};

function GoogleMapContainer() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBfrrQgzijsyeEEydZ5voyOL6k43UoJNHk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker key={'Media hunters'} position={center}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapContainer)