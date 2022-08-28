import { combineReducers } from "redux";
import { jobsReducer } from "./features";

export const rootReducer = combineReducers({
    jobsReducer,
})
