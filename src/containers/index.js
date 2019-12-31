import React, { Component } from 'react'
import DarkSkyApi from '@/utils/DarkSkyApi'

import App from '@/components/App'

class AppContainer extends Component {
  state = { weather: {} }

  componentDidMount() {
    DarkSkyApi.loadCurrent().then((result) => {
      console.log('weather', result)

      return this.setState({ weather: result })
    })
  }

  render() {
    return <App data={this.state.weather} />
  }
}

export default AppContainer
