// /src/index.js -> entry file

// libs
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// redux store
import store from './store'

const RootComponent = (
	<Provider store={ store }>
		<div>Hello from Root React Component :)</div>
    </Provider>
)

render(RootComponent, document.getElementById('_Main'));