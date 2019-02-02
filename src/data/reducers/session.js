import { SET_CURRENT_SESSION, SET_ROSTER } from "../actions/actionTypes";

function sessionReducer(
  state = {
    currentSession: null,
    roster: [
      {
        jid: "asemoemo#chatdemoui_test1@easemob.com",
        name: "test1",
        subscription: "both"
      },
      {
        jid: "asemoemo#chatdemoui_test1@easemob.com",
        name: "test2",
        subscription: "both"
      }
    ]
  },
  action
) {
  switch (action.type) {
    case SET_CURRENT_SESSION:
      return { ...state, currentSession: action.payload.currentSession };
    case SET_ROSTER:
      return { ...state, roster: [...action.payload.roster] };
    default:
      return state;
  }
}

export default sessionReducer;
