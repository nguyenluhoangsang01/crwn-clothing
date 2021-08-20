import shopActionTypes from "./types";

const INITIAL_STATE = {
  collections: null,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
