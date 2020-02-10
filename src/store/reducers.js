import { combineReducers } from 'redux'

import { weatherData as weather } from './weather/reducer'

export default combineReducers({
  weather,
})
