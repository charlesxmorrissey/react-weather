import { call, put } from 'redux-saga/effects'
import DarkSkyAPI from 'dark-sky-skeleton'

import { fetchWeatherSuccess, fetchWeatherError } from '@/store/weather/actions'

const api = new DarkSkyAPI(process.env.DARK_SKY_SECRET_KEY)

// 40.678177
// -73.944160

export function* fetchWeather() {
  try {
    // const lat = yield call(api.latitude, '40.678177')
    // const long = yield call(api.longitude, '-73.944160')
    yield put(fetchWeatherSuccess(api.latitude('40.678177')))
    yield put(fetchWeatherSuccess(api.longitude('-73.944160')))
    yield put(fetchWeatherSuccess(api.get()))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

export function* weatherWatcher() {
  yield fetchWeather()
}
