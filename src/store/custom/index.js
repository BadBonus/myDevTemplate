import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers";

export const actions = createActions({
  PROCESS_FAILURE: undefined,
  // SIGN_UP: undefined,
  // SIGN_UP_SUCCESS: undefined,
  // SIGN_UP_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    // [actions.signUp, handlers.signUp],
    // [actions.signUpSuccess, handlers.signUpSuccess],
    // [actions.signUpFailure, handlers.signUpFailure],

    [actions.processFailure, handlers.processFailure],
  ]),
  initialState
);

export default reducer;
