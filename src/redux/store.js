import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import reduxPromiseMiddleware from 'redux-promise-middleware';

import { addTodoReducer } from './reducers';

const rootReducers = combineReducers({
    addTodo: addTodoReducer
});

// const middleware = applyMiddleware(reduxPromiseMiddleware, thunk, logger);

export const store = createStore(
    rootReducers,
    undefined
)