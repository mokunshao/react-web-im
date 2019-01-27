function signReducer(
  state = {
    signUpState: 0,
    signInState: 0
  },
  action
) {
  switch (action.type) {
    case "SIGNUp_START":
      return Object.assign({}, state, {
        signUpState: action.playload.state
      });
    default:
      return state;
  }
}

export default signReducer;
