// /src/components/index.js

import React, { Component } from "react"

import ChuckNorris from './chuckNorris'
import APOD from './apod'

export default class Root extends Component{
	render(){
		return (
			<div>
				Root component!
				<ChuckNorris />
				<APOD />
			</div>
		);
	}
}