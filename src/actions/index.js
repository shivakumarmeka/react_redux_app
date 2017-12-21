import axios from 'axios';

const API_KEY='724a5a1a5e699286531c4700b937fe3c';
const URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
const url = `${URL}&q=${cityName},us`;
const data = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: data
    }
}