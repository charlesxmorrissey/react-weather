import { call, put } from 'redux-saga/effects'
import DarkSky from 'dark-sky-skeleton'

import { fetchWeatherSuccess, fetchWeatherError } from '@/store/weather/actions'

const darkSky = new DarkSky(process.env.DARK_SKY_SECRET_KEY)

/*
darkSkyApi
  .latitude(lat)
  .longitude(long)
  .units('us')
  .language('en')
  .time('2000-04-06T12:20:05') // moment().year(2000).format('YYYY-MM-DDTHH:mm:ss')
  .extendHourly(true)
  .get()
  .then(data => console.log(data));
*/

// 40.678177
// -73.944160
export function* fetchWeather() {
  try {
    // const lat = yield call(darkSky.latitude('40.678177'))
    // const long = yield call(darkSky.longitude('-73.944160'))

    const response = yield call(
      darkSky
        .latitude('40.678177')
        .longitude('-73.944160')
        // .units('us')
        // .language('en')
        // .time('2000-04-06T12:20:05')
        // .extendHourly(true)
        .get()
        .then((data) => {
          console.log('data::', data)
          return data
        })
    )
    console.log('response::', response)

    // yield put(fetchWeatherSuccess(response))
  } catch (error) {
    yield put(fetchWeatherError(error))
  }
}

// export function* fetchWeather() {
//   try {
//     const response = yield call(
//       darkSky
//         .latitude('40.678177')
//         .longitude('-73.944160')
//         .get()
//       // .then((data) => data)
//     )

//     console.log('response::', response)

//     yield put(fetchWeatherSuccess(response))
//   } catch (error) {
//     yield put(fetchWeatherError(error))
//   }
// }

export function* weatherWatcher() {
  yield fetchWeather()
}
