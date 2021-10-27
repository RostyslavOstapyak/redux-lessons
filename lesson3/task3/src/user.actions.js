export const ADD_USER = 'USER/ADD_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const addUser = userData => ({ type: ADD_USER, userData });
export const removeUser = userId => ({ type: REMOVE_USER, userId });
