import { createStore, combineReducers, applyMiddleware } from "redux";
import signReducer from "./reducers/sign";
import sessionReducer from "./reducers/session";
import ReduxThunk from "redux-thunk";

const reducers = combineReducers({
  sign: signReducer,
  session: sessionReducer
});

const middleware = [ReduxThunk];

let finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(reducers);

export default store;
