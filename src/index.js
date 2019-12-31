import React from 'react'
import { render } from 'react-dom'

import AppContainer from '@/containers'
import DarkSkyApi from '@/utils/DarkSkyApi'

import '@/assets/css/base.css'

DarkSkyApi.apiKey = process.env.DARK_SKY_SECRET_KEY

render(<AppContainer />, document.getElementById('app'))
