import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import reduxPromiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import { addTodoReducer } from './reducers';

const rootReducers = combineReducers({
    addTodo: addTodoReducer
});

const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: "",
    whitelist: ['addTodo']
}

const pReducer = persistReducer(persistConfig, rootReducers);

// const middleware = applyMiddleware(reduxPromiseMiddleware, thunk, logger);

export const store = createStore(
    pReducer,
    undefined
)

export const persistor = persistStore(store);