import { ADD_USER, REMOVE_USER } from './user.actions';

const initialState = null;

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return action.userData;
    }
    case REMOVE_USER: {
      const updatedList = state.filter(user => user.id !== action.userId);
      return updatedList;
    }
    default:
      return state;
  }
};
