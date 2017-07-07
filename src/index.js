//import  {React, Router, Route, IndexRoute, Component, IndexLink, hashHistory, Link } from 'react';
import  React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Home from './Home';
import Other from './Other';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

registerServiceWorker();
