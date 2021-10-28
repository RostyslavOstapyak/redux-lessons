import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const reducer = combineReducers({ users: usersReducer });

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;
