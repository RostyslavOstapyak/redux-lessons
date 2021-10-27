import { setUser, removeUser } from './user.actions.js';
import store from './store';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser('user'));
