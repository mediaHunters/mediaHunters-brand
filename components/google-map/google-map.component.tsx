import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 51.1472672,
  lng: 17.0805971,
};

function GoogleMapContainer() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBfrrQgzijsyeEEydZ5voyOL6k43UoJNHk"
    >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.9039428943124!2d17.07940481595073!3d51.147122444801475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9edd033359f%3A0x678a7d85b25517d0!2sStrony%20Internetowe%20Wroc%C5%82aw%20-%20MediaHunters!5e0!3m2!1spl!2spl!4v1671628669140!5m2!1spl!2spl" style={{ margin: '0 auto', "width": "100%", "maxHeight": "500px", height: "100%" }}
        loading="lazy"></iframe>
    </LoadScript>
  )
}

export default React.memo(GoogleMapContainer)