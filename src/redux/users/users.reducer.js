import { userActionTypes } from "./users.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
