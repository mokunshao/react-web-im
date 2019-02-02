import { GET_MSGS, SEND_TEXT_MSG } from "../actions/actionTypes";

function messageReducer(
  state = {
    messageList: {
      test1: [
        { id: 1, from: "test1", to: "myname", data: "111" },
        { id: 2, from: "test1", to: "myname", data: "222" },
        { id: 3, from: "test1", to: "myname", data: "333" }
      ]
    },
    currentMessage: []
  },
  action
) {
  switch (action.type) {
    case GET_MSGS:
      return { ...state, currentSession: action.payload.currentSession };
    case SEND_TEXT_MSG:
      return { ...state, roster: [...action.payload.roster] };
    default:
      return state;
  }
}

export default messageReducer;
