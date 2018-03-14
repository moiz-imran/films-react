import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filmsApp from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(filmsApp);

export default store;