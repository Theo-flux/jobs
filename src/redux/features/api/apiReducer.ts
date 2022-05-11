import { ApiState, Action } from "../../interfaces"

import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_ERROR
} from "./apiTypes"

const intialState = {
    loading: false,
    jobs: [],
    error: ""
} as ApiState



const jobsReducer = (state = intialState, action: Action) => {
    const {type, payload} = action
    switch (type) {
        case FETCH_JOBS_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_JOBS_SUCCESS: return {
            loading: false,
            jobs: payload,
            error: ""
        }

        case FETCH_JOBS_ERROR: return {
            loading: false,
            jobs: [],
            error: payload
        }

        default: return state
    }
}

export default jobsReducer