import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYW5kZXIwOTUiLCJhIjoiY2p3djZhcDFrMDBxMzQ5cDRpdnFicG96ZiJ9.5YN40YuFNXsHk22tL62OXA'
    }
})

export default directionsApi;