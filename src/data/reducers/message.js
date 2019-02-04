import { GET_MSGS, SEND_TEXT_MSG } from "../actions/actionTypes";

function messageReducer(
  state = {
    messageList: {
      test1: [
        { id: 1, from: "test1", to: "myname", data: "111pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp" },
        { id: 2, from: "myname", to: "myname", data: "222" },
        { id: 3, from: "test1", to: "myname", data: "333" }
      ],
      test2: [
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
    case SEND_TEXT_MSG:
      return {
        ...state,
        messageList: fn1(
          action.payload.id,
          action.payload.from,
          action.payload.to,
          action.payload.data,
          state.messageList
        )
      };
    default:
      return state;
  }
}

export default messageReducer;

function fn1(id, from, to, data, messageList) {
  let list = messageList[to] || [];
  list.push({ id, from, to, data });
  messageList[to] = [...list];
  return { ...messageList };
}
