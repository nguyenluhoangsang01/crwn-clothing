import shopActionTypes from "./types";

const INITIAL_STATE = {
  collections: null,
  errorMessage: undefined,
  isLoading: true,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
