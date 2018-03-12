import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import filmsApp from './reducers';
import App from './components/App';
import FilmPage from './containers/FilmPage'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(filmsApp);

render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path={'/movie/:id'} component={FilmPage} />
                <Route path={'/'} component={App} />
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);