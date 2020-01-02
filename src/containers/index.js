import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fetchWeatherAction from '@/utils/fetchWeather'
import App from '@/components/App'

import { getWeatherData, getWeatherPending, getWeatherError } from '@/selectors'

class AppContainer extends Component {
  componentDidMount() {
    const { fetchWeather } = this.props

    fetchWeather()
  }

  render() {
    const { data, pending } = this.props

    return !pending ? <App data={data} /> : null
  }
}

AppContainer.propTypes = {
  data: PropTypes.object,
  fetchWeather: PropTypes.func,
  pending: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  data: getWeatherData(state),
  error: getWeatherError(state),
  pending: getWeatherPending(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchWeather: fetchWeatherAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
