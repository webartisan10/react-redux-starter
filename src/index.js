import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import './styles/index.css'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import configureStore from './store/configureStore'
const store = configureStore()

import Home from './containers/Home'
import Config from './containers/Config'

render(
	<Provider store={store}>
		<ConnectedRouter history={history}> 
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/config' component={Config} />
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>,
  document.getElementById('root')
)
