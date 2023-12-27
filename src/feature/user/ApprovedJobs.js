import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployerApprovedJobs } from '../../state/employer/employerJobsSlice';

function ApprovedJobs() {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.user.user);
    useEffect(() => {
        dispatch(fetchEmployerApprovedJobs({ token }));
    }, [dispatch, token]);
    const {data } = useSelector((state) => state.pendingJob.approvedJobs);
  return (
    <div className="bg-violet-300 border-violet-300 rounded-lg h-24 w-full flex justify-center items-center mt-4">
              <p className="text-white text-xl">{data?.length} Approved Jobs</p>
        </div>
  )
}

export default ApprovedJobs
