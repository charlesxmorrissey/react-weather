import DarkSkyApi from '@/utils/DarkSkyApi'

import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherError,
} from '@/actions'

const fetchWeather = () => (dispatch) => {
  dispatch(fetchWeatherRequest())

  DarkSkyApi.loadCurrent()
    .then((result) => {
      if (result.error) {
        throw result.error
      }

      dispatch(fetchWeatherSuccess(result))

      return result
    })
    .catch((error) => {
      dispatch(fetchWeatherError(error))
    })
}

export default fetchWeather
