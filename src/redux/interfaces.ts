export interface Fetch {
    FETCH_JOBS_REQUEST: string;
    FETCH_JOBS_SUCCESS: string;
    FETCH_JOBS_ERROR: string;
} 

export interface ApiState {
    loading: boolean;
    jobs: [];
    error: "" 
}

export interface Action {
    type: string;
    info?: string;
    payload?: any
}