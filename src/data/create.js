import { createStore, combineReducers, applyMiddleware } from "redux";
import signReducer from "./reducers/sign";
import ReduxThunk from "redux-thunk";

const _reducers = {
  sign: signReducer
};

const reducers = combineReducers(_reducers);

const middleware = [ReduxThunk];

let finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(reducers);

export default store;