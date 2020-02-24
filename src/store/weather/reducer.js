import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_ERROR,
} from '@/store/actionTypes'

const initialState = {
  data: {},
  errors: [],
  isLoading: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case WEATHER_SUCCESS:
      const { data } = action

      return {
        ...state,
        isLoading: false,
        data,
      }

    case WEATHER_ERROR:
      const { error } = action

      return {
        ...state,
        isLoading: false,
        errors: [...state.errors, error],
      }

    default:
      return state
  }
}
