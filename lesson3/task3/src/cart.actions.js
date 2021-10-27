export const ADD_ITEM = 'CART/ADD_ITEM';
export const REMOVE_ITEM = 'CART/REMOVE_ITEM';

export const addItem = itemData => ({
  type: ADD_ITEM,
  itemData,
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId,
});
