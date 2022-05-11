import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import jobsReducer from "./features/api/apiReducer"

const store = createStore(jobsReducer, applyMiddleware( thunk ))

export default store