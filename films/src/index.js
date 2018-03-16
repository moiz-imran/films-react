import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import FilmPage from './containers/FilmPage'
import ErrorPage from './components/ErrorPage'
import store from './store'
import './styles.css'

render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path={'/movie/:id'} component={FilmPage} />
                <Route path={'/error'} component={ErrorPage} />
                <Route path={'/'} component={App} />
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);