import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filmsApp from './reducers';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(filmsApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);