import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';

const store = createStore(reducer);

render (
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
