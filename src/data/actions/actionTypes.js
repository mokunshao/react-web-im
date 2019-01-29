export function createAction(actiontype, ...params) {
  return (...args) => {
    let action = { type: actiontype, payload: {} };
    params.forEach((item, index) => {
      action.payload[item] = args[index];
    });
    return action
  };
}

// 使用范例
// createAction('actionTypes','key')('value')
// createAction('actionTypes','key1','key2')('value1','value2')

export const REG_STATE_CHANGE = "reg_state_change";

export const SET_CURRENT_SESSION = "set_currrnet_session";

export const SET_ROSTER = "set_roster";

export const SEND_TEXT_MSG = "send_text_msg";

export const GET_MSGS = "get_msgs";

export const CHANGE_MSG_STATUS = "change_msg_status";
