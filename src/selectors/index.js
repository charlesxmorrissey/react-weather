import { createSelector } from 'reselect'

const selectWeather = (state) => state

export const selectWeatherData = createSelector(
  selectWeather,
  (state) => state.weather.data
)

export const selectWeatherPending = createSelector(
  selectWeather,
  (state) => state.pending
)

export const selectWeatherError = createSelector(
  selectWeather,
  (state) => state.error
)
