import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import fetchWeather from '@/utils/fetchWeather'
import App from './App'

import { selectWeatherData, selectWeatherLoading } from '@/store/selectors'

const AppContainer = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectWeatherLoading())
  const weatherData = useSelector(selectWeatherData())

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])

  return !isLoading ? <App data={weatherData} /> : null
}

export default AppContainer
