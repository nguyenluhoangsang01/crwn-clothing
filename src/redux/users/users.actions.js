import { userActionTypes } from "./users.types";

// TODO: SIGN IN
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const emailSignInStart = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: user,
});
export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

// TODO: CHECK USER SESSION
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

// TODO: SIGN OUT
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

// TODO: SIGN UP
export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailure = (errorMessage) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});
