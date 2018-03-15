import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filmsApp from './reducers';
import { loadStateLocal, saveStateLocal, loadStateSession, saveStateSession } from './storage'
import { setStorageState } from './actions/storageState'

let persistedState = loadStateSession();
let saveState = false;

if (persistedState === undefined) {
    saveState = true;
    persistedState = loadStateLocal();
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(filmsApp, persistedState);

if (saveState) {
    store.dispatch(setStorageState('local'));
}

store.subscribe(() =>  {
    if (store.getState().storageState === 'session') {
        saveStateSession({
            userToken: store.getState().userToken
        });
    } else if (store.getState().storageState === 'local') {
        saveStateLocal({
            userToken: store.getState().userToken            
        })
    }
})

export default store;