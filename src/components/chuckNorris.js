// /src/components/chuckNorris.js

// libs
import React, { Component } from 'react'

// actions
import { getChuckNorrisQuote } from './../actions'

export default class ChuckNorris from Component{
	componentDidMount(){
		getChuckNorrisQuote();
	}

	render(){
		const { chuckQuote } = this.props._store;

		return (
			<div>{ chuckQuote || 'chuck quote here' }</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
	    _store: state._store,
	};
}

export default connect(mapStateToProps)(ChuckNorris);