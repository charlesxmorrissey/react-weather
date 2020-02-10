import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fetchWeatherAction from '@/utils/fetchWeather'
import App from '@/components/App'

import {
  selectWeatherData,
  selectWeatherError,
  selectWeatherLoading,
} from '@/store/selectors'

const AppContainer = ({ data, fetchWeather, isLoading }) => {
  useEffect(() => fetchWeather(), [])
  return !isLoading ? <App data={data} /> : null
}

AppContainer.propTypes = {
  data: PropTypes.object,
  fetchWeather: PropTypes.func,
  isLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  data: selectWeatherData(state),
  error: selectWeatherError(state),
  isLoading: selectWeatherLoading(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchWeather: fetchWeatherAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
