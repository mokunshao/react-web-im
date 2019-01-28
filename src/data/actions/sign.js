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
