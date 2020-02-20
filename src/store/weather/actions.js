import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_ERROR,
} from '@/store/actionTypes'

export const fetchWeatherRequest = () => ({
  type: WEATHER_REQUEST,
})

export const fetchWeatherSuccess = (data) => ({
  type: WEATHER_SUCCESS,
  data,
})

export const fetchWeatherError = (error) => ({
  type: WEATHER_ERROR,
  error,
})
