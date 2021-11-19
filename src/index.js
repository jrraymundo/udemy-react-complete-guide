import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import store from './store/index'

/**
 * To make the states in redux store accessible to the whole app
 * a Provider component from react-redux is used to wrap the whole app
 * and pass the store as props
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
