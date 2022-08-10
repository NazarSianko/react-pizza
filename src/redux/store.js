import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor  = persistStore(store);


