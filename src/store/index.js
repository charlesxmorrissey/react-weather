import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '@/reducers'
import * as actionCreators from '@/actions'

export default function configureStore(preloadedState) {
  const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  const middlewareEnhancer = applyMiddleware(...[thunk])

  const extEnhancer =
    devExtension &&
    devExtension({
      actionCreators,
      serialize: true,
      trace: true,
    })

  const enhancers = [middlewareEnhancer, extEnhancer]
  const composedEnhancers = compose(...enhancers)

  if (!extEnhancer) {
    console.warn(
      'Install Redux DevTools Extension to inspect the app state: ' +
        'https://github.com/zalmoxisus/redux-devtools-extension#installation'
    )
  }

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers.
    module.hot.accept('@/reducers', () => {
      store.replaceReducer(require('@/reducers').default)
    })
  }

  return store
}
