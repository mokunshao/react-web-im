import { REG_STATE_CHANGE } from "../actions/actionTypes";

function signReducer(
  state = {
    signUpState: 0,
    signInState: 0
  },
  action
) {
  switch (action.type) {
    case REG_STATE_CHANGE:
      return Object.assign({}, state, {
        signUpState: action.payload.statusCode
      });
    default:
      return state;
  }
}

export default signReducer;
