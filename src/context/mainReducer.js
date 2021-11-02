import { GET_USER, SWITCH_THEME, SET_LOADING, SET_ERROR } from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
