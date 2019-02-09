// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 
// ReactDOM.render(<App />, document.getElementById('root'));

/// If you want your app to work offline and load faster, you can change
/// unregister() to register() below. Note this comes with some pitfalls.
/// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
// import * as serviceWorker from './serviceWorker';
import AppChat from './components/AppChat';
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(<AppChat />, document.getElementById('root'));
serviceWorker.register();
