
import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 3,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYW5kZXIwOTUiLCJhIjoiY2p3djZhcDFrMDBxMzQ5cDRpdnFicG96ZiJ9.5YN40YuFNXsHk22tL62OXA'
    }
})

export default searchApi;