import { ADD_ITEM, REMOVE_ITEM } from './cart.actions';

const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.itemData];
    }
    case REMOVE_ITEM: {
      const newList = state.filter(item => item.id !== action.itemId);
      return newList;
    }
    default:
      return state;
  }
};
