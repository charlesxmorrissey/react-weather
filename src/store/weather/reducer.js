import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from '@/store/actionTypes'

const initialState = {
  data: {},
  error: null,
  isLoading: false,
}

export const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      }

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    default:
      return state
  }
}
