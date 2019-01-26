import { createStore, combineReducers, applyMiddleware } from "redux";
import signReducer from "./reducers/sign";

const reducers = {
  sign: signReducer
};

const middleware = [];

let finalCreateStore=applyMiddleware(...middlewares)(createStore)

export default finalCreateStore(reducers)