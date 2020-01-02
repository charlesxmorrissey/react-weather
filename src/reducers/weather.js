import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from '@/constants'

const initialState = {
  data: {},
  error: null,
  pending: false,
}

export const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        pending: true,
      }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      }

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }

    default:
      return state
  }
}
