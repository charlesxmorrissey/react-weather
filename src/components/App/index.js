import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchWeatherRequest } from '@/store/weather/actions'
import { selectWeatherData, selectWeatherLoading } from '@/store/selectors'
import { BACKGROUND_COLOR_MAP } from '@/constants'

import Loader from '@/components/Loader'

import styles from './App.css'

const AppContainer = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectWeatherLoading())
  const weatherData = useSelector(selectWeatherData())
  const { icon, summary, temperature } = weatherData
  const bgStyle = {
    backgroundColor:
      BACKGROUND_COLOR_MAP[icon] || BACKGROUND_COLOR_MAP['default'],
  }

  useEffect(() => {
    dispatch(fetchWeatherRequest())
  }, [dispatch])

  return (
    <main className={styles.app} style={bgStyle}>
      {!isLoading ? (
        <h1 className={styles.appTitle}>
          {summary} ({icon}) &mdash; {Math.round(temperature)}&deg;
        </h1>
      ) : (
        <Loader />
      )}
    </main>
  )
}

export default AppContainer
