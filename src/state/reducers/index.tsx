import { combineReducers } from "redux";
import bankReducer from "./bankReducers";
const rootReducer = combineReducers({
  bank: bankReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
