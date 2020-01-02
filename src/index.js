import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from '@/containers'
import DarkSkyApi from '@/utils/DarkSkyApi'
import configureStore from '@/store'

import '@/assets/css/base.css'

const store = configureStore()

DarkSkyApi.apiKey = process.env.DARK_SKY_SECRET_KEY

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
