import axios from "axios"
import { ApiAction, ApiState } from "../../interfaces"
import { Dispatcher } from "../../type"

const url: string = "https://remotive.com/api/remote-jobs?limit=5"

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

export const fetchJobsError = (jobs: ApiState['jobs']) => {
    return {
        type: FETCH_JOBS_ERROR,
        info: "get the error message from the api",
        payload: jobs
    }
}

export function fetchJobs(){
    return (dispatch: Dispatcher) => {
        dispatch(fetchJobsRequest())
        axios.get(url)
        .then(response => {
            const job: ApiState['jobs'] = {data: response.data, error:''} 
            return dispatch(fetchJobsSuccess(job))
        })
        .catch(error => {
            const job: ApiState['jobs'] = {data: [], error:'error.message'}
            return dispatch(fetchJobsError(job))  
        })
    }
}