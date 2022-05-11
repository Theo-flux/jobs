import {
    FETCH_JOBS,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_ERROR
} from "./apiTypes"

export const fetchJobs = () => {
    return {
        type: FETCH_JOBS,
        info: "sets loading state to true"
    }
}

export const fetchJobsSuccess = (jobs: {}[]) => {
    return {
        type: FETCH_JOBS_SUCCESS,
        info: "get the data from the api",
        payload: jobs
    }
}

export const fetchJobsError = (error: string) => {
    return {
        type: FETCH_JOBS_ERROR,
        info: "get the error message from the api",
        payload: error
    }
}

