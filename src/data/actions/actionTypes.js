export function createActions(actiontype, ...params) {
  return (...args) => {
    let action = { type: actiontype, payload: {} };
    params.forEach((item, index) => {
      action.payload[params[index]] = args[index];
    });
    return action
  };
}

export const REG_STATE_CHANGE = "reg_state_change";

export const SET_CURRENT_SESSION = "set_currrnet_session";

export const SET_ROSTERS = "set_rosters";

export const SEND_TEXT_MSG = "send_text_msg";

export const GET_MSGS = "get_msgs";

export const CHANGE_MSG_STATUS = "change_msg_status";
