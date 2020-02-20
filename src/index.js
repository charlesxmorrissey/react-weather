import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from '@/components/App'
import configureStore from '@/store'
import rootSaga from '@/sagas'

import '@/styles/base.css'

const store = configureStore()

store.runSaga(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
