import { call, put } from 'redux-saga/effects'

// import DarkSkyApi from '@/utils/DarkSkyApi'
import DarkSkyAPI from '@/api'

import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherError,
} from '@/store/weather/actions'

const apiKey = process.env.DARK_SKY_SECRET_KEY
const api = new DarkSkyAPI(apiKey)

export function* fetchWeather() {
  try {
    // const query = `https://api.darksky.net/forecast/${apiKey}`
    // const data = yield call(api, query)
    // console.log('data::', data)
    yield put(fetchWeatherSuccess(api))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

export function* weatherWatcher() {
  yield fetchWeather()
}
