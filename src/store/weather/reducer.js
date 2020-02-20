import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
} from '@/store/actionTypes'

const initialState = {
  data: {},
  errors: [],
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
      const { data } = action
      console.log('FETCH_WEATHER_SUCCESS::', data)

      return {
        ...state,
        isLoading: false,
        data,
      }

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: [...state.errors, action.error],
      }

    default:
      return state
  }
}
