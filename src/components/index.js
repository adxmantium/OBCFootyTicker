import React, { Component } from "react"

import { getChuckNorrisQuote } from './../actions'

export default class Root extends Component{
	componentDidMount(){
		getChuckNorrisQuote();
	}

	render(){
		return (
			<div>root component</div>
		);
	}
}