import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'
import Instructions from './Instructions';


// Routing location
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/instructions" component={Instructions} />
	</Router>,
	document.getElementById('root')
);
