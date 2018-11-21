import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

const history = createBrowserHistory();
const routingMiddlewareInstance = routerMiddleware(history);

// Add here the values for your initial state
const initialState = {};

// Add here the middlewares you want to use.
const middleware = [ thunk, routingMiddlewareInstance ];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default { store, history };
