import { createStore, combineReducers } from 'redux';
import { usersReducer } from './user.reducer';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  users: usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
