import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Loop up Config in file App.js to create Component App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
