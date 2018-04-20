// src/actions/index.js

import axios from 'axios'

export const getChuckNorrisQuote = () => {

	return dispatch => {
		const request = axios.get('https://api.chucknorris.io/jokes/random');

		request.then(res => {
			console.log('res: ', res);
		});

		request.catch(err => console.log('chuck error: ', err));
	}
	
}


export const getAPOD = () => {

	return dispatch => {
		const request = axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');

		request.then(res => {
			console.log('res: ', res);
		});

		request.catch(err => console.log('chuck error: ', err));
	}
	
}