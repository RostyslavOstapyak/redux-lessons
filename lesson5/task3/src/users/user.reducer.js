import { CHANGE_FILTER } from './user.actions';
import users from '../users';

const initialState = {
  users: { filterText: '', usersList: users },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, ...users, filterText: action.payload.text };
    default:
      return state;
  }
};

export default userReducer;
