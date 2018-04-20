// /src/components/astroPic.js

// libs
import { connect } from 'react-redux'
import React, { Component } from 'react'

// actions
import { getAPOD } from './../actions'

export default class APOD from Component{
	componentDidMount(){
		getAPOD();
	}

	render(){
		const { apod } = this.props._store;

		return (
			<div>{ apod || 'Background pic here' }</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
	    _store: state._store,
	};
}

export default connect(mapStateToProps)(APOD);