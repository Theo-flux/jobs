import { ApiState, ApiAction } from "../../interfaces"

import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_ERROR
} from "./apiTypes"

const intialState: ApiState = {
    loading: false,
    jobs: {
        data: [],
        error: ""
    }
}


const jobsReducer  = (state = intialState, action: ApiAction) => {
    const {type, payload} = action
    switch (type) {
        case FETCH_JOBS_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_JOBS_SUCCESS: return {
            loading: false,
            jobs: {
                ...state.jobs,
                data: payload?.data || [],
                error: ""
            }
        }

        case FETCH_JOBS_ERROR: return {
            loading: false,
            jobs: {
                ...state.jobs,
                data: [],
                error: payload?.error
            }
        }

        default: return state
    }
}

export default jobsReducer