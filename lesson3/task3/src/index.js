import { addItem, removeItem } from './cart.actions';
import store from './store';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addItem({ id: 1, title: 'fff' }));
store.dispatch(removeItem(1));
