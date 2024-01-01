import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployerPendingJobs } from "../../state/employer/employerJobsSlice";
import Navbar from "../../components/common/Navbar";
import ApprovedJobs from "./ApprovedJobs";
import EmployerALlJobs from "./EmployerALlJobs";
import JobsChart from "./JobsChart";
import Footer from './../../components/common/Footer';
import EmployerJosList from "./EmployerJosList";

function Dashboard() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchEmployerPendingJobs({ token }));
  }, [dispatch, token]);
  const { employerJobs } = useSelector((state) => state.pendingJob);

  return (
    <div className=" ">
      <Navbar></Navbar>
      <div className=" mt-12 lg:w-3/4 mx-auto  lg:flex  gap-4 justify-between items-center">
        <div className="bg-teal-500 border-teal-500 rounded-lg h-24 w-full flex justify-center items-center mt-4">
          <p className="text-white text-xl">
            {employerJobs?.data?.length} Pending Jobs
          </p>
        </div>
        <ApprovedJobs></ApprovedJobs>
        <div className="bg-violet-500  border-violet-500 rounded-lg flex justify-center items-center h-24 w-full mt-4">
          <p className="text-white text-xl">0 Rejected Jobs</p>
        </div>
      </div>
      <JobsChart></JobsChart>
      <EmployerJosList></EmployerJosList>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
