import { createSelector } from 'reselect'

const getWeather = (state) => state

export const selectWeatherData = createSelector(
  getWeather,
  (state) => state.weather.data
)

export const selectWeatherPending = createSelector(
  getWeather,
  (state) => state.pending
)

export const selectWeatherError = createSelector(
  getWeather,
  (state) => state.error
)
