import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from '@/store/actionTypes'

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
})

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  data,
})

export const fetchWeatherError = (error) => ({
  type: FETCH_WEATHER_ERROR,
  error,
})
