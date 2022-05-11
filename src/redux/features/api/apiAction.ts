import axios from 'axios'
import store from "../../store"
import { ApiState } from "../../interfaces"

type Dispatch = typeof store.dispatch

import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_ERROR
} from "./apiTypes"

export const fetchJobsRequest = () => {
    return {
        type: FETCH_JOBS_REQUEST,
        info: "sets loading state to true"
    }
}

export const fetchJobsSuccess = (jobs: ApiState['jobs']) => {
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

export const fetchJobs = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchJobsRequest())
        axios.get("")
        .then
    }
}