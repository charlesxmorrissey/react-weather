import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fetchWeatherAction from '@/utils/fetchWeather'
import App from '@/components/App'

import {
  selectWeatherData,
  selectWeatherError,
  selectWeatherPending,
} from '@/selectors'

const AppContainer = ({ data, fetchWeather, pending }) => {
  useEffect(() => fetchWeather(), [])
  return !pending ? <App data={data} /> : null
}

AppContainer.propTypes = {
  data: PropTypes.object,
  fetchWeather: PropTypes.func,
  pending: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  data: selectWeatherData(state),
  error: selectWeatherError(state),
  pending: selectWeatherPending(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchWeather: fetchWeatherAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
