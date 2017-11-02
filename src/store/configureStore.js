import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const logger = createLogger()
const history = createBrowserHistory()

export default function configureStore(initialState) {

   const store = createStore(
      connectRouter(history)(rootReducer),  // new root reducer with router state
      initialState, 
      compose(
         applyMiddleware(
            routerMiddleware(history),  // for dispatching history actions
            logger // place for other middlewares 
         ),
         window.devToolsExtension ? window.devToolsExtension() : f => f
      )
   )

   if (module.hot) {
      module.hot.accept('../reducers', () => {
         const nextRootReducer = require('../reducers')
         store.replaceReducer(nextRootReducer)
      })
   }

   return store

}
