import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default function configureStore(initialState = {}) {
  const middlewares = [thunk]
  let enhancer

  if (process.env.NODE_ENV !== 'production') {
    enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  } else {
    enhancer = applyMiddleware(...middlewares)
  }

  const store = createStore(rootReducer, initialState, enhancer)

  // Enable Webpack hot module replacement for reducers.
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return { ...store }
}
