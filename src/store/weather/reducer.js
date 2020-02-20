import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_ERROR,
} from '@/store/actionTypes'

const initialState = {
  data: {},
  errors: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_REQUEST:
      console.log('WEATHER_REQUEST::', action)

      return {
        ...state,
        isLoading: true,
      }

    case WEATHER_SUCCESS:
      const { data } = action
      console.log('WEATHER_SUCCESS::', data)

      return {
        ...state,
        isLoading: false,
        data,
      }

    case WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: [...state.errors, action.error],
      }

    default:
      return state
  }
}
