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
      return { ...state, signUpState: action.payload.signUpState };
    default:
      return state;
  }
}

export default signReducer;
