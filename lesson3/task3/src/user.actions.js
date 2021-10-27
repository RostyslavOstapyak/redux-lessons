export const SET_USER = 'USER/ADD_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const setUser = userData => ({ type: SET_USER, userData });
export const removeUser = userId => ({ type: REMOVE_USER, userId });
