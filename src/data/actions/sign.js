// import { createActions, REG_STATE_CHANGE } from "./actionTypes";

// export const regStatus = createActions(REG_STATE_CHANGE, "state");

// 以下代码用来把回调变成promise

// export function reg(options) {
//   return dispatch => {
//     return new Promise((resolve, reject) => {
//       options.success = () => {
//         options.success && options.success();
//         resolve();
//       };
//       options.error = () => {
//         options.error && options.error();
//         reject();
//       };
//     });
//   };
// }

import store from "../createStore";
import { REG_STATE_CHANGE } from "./actionTypes";

export const signUping = () => {
  store.dispatch({ type: REG_STATE_CHANGE, payload: { statusCode: 1 } });
};

export const signUpSuccess = () => {
  store.dispatch({ type: REG_STATE_CHANGE, payload: { statusCode: 2 } });
};

export const signUpError = () => {
  store.dispatch({ type: REG_STATE_CHANGE, payload: { statusCode: 3 } });
};
