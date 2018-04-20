// /src/index.js -> entry file

// libs
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// redux store
import store from './store'
import Root from './components'

const RootComponent = (
	<Provider store={ store }>
		<Root />
    </Provider>
)

render(RootComponent, document.getElementById('_Main'));