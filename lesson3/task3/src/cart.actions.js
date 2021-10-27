export const ADD_ITEM = 'CART/ADD_ITEM';
export const REMOVE_ITEM = 'CART/REMOVE_ITEM';

export const addProduct = productData => ({
  type: ADD_ITEM,
  productData,
});

export const removeProduct = id => ({
  type: REMOVE_ITEM,

  id,
});
