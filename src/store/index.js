import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const logger = createLogger({
    collapsed: true
});

const enhance = applyMiddleware(thunk, logger);
const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
    reducer,
    composeEnhancers(enhance),
);

export default store;