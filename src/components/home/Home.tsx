import React, { useEffect } from "react";
import { ApiAction, ApiState } from "../../redux/interfaces";
import {connect} from "react-redux";
import { fetchJobs } from "../../redux/features/api/apiAction";
import { Dispatcher } from "../../redux/type";

type Homeprops = {
    jobData: ApiState;
    fetchJobs: () => ApiAction
}

function Home({jobData, fetchJobs}: Homeprops) {

    useEffect(() => {
        fetchJobs()
    }, [])
    
  return (
    <div>
        {
            jobData.jobs.data.map((job, index) => {
                return(
                    <p key={index}>
                        {index}
                    </p>
                )
            })
        }
    </div>
  )
}


const mapStateToProps = (state: ApiState) => {
    return {
        jobData: state.jobs
    }
}

const mapDispatchToProps = (dispatch: Dispatcher) => {
    return {
        fetchJobs: () => dispatch(fetchJobs())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)