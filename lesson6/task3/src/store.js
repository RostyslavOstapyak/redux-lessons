import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import weatherReducer from './weather/weather.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(weatherReducer, enhancer);

export default store;
