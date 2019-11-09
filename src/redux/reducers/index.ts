import { combineReducers } from "redux";

import counter from "./counterReducer";

const reducers = combineReducers({ counter });

export default reducers;
