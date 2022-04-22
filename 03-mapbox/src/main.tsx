import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXIwOTUiLCJhIjoiY2p3djZhcDFrMDBxMzQ5cDRpdnFicG96ZiJ9.5YN40YuFNXsHk22tL62OXA';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene geolocalización')
  throw new Error("Tu navegador no tiene geolocalización");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
