import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const express = require('express');
//const path = require('path');
//const app = express();

//app.use(express.static(path.join(__dirname), 'public'))
//this displays the contents defined in app.js onto the element 'root' which is in index.html
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
