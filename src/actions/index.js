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