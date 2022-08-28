export interface Fetch {
    FETCH_JOBS_REQUEST: string;
    FETCH_JOBS_SUCCESS: string;
    FETCH_JOBS_ERROR: string;
} 

export interface ApiState {
    loading: boolean;
    jobs: {
        data: {}[];
        error: string | undefined
    };
}

export interface ApiAction {
    type: string;
    info: string;
    payload?: {
        data: {}[];
        error: string | undefined
    };
}

