import { takeLatest } from 'redux-saga/effects'

import { FETCH_WEATHER_REQUEST } from '@/store/actionTypes'

import { weatherWatcher } from './weather/sagas'

export default function* rootSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, weatherWatcher)
}
