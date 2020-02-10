import { createSelector } from 'reselect'

export const selectWeather = (state) => state.weather

export const selectWeatherData = () =>
  createSelector(selectWeather, (substate) => substate.data)

export const selectWeatherLoading = () =>
  createSelector(selectWeather, (substate) => substate.isLoading)

export const selectWeatherError = () =>
  createSelector(selectWeather, (substate) => substate.error)
