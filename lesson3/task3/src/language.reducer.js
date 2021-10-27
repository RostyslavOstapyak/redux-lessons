import { SETLANGUAGE } from './language.actions';

const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETLANGUAGE: {
      return action.language;
    }
    default:
      return state;
  }
};
