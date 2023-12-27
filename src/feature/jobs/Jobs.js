import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobs } from "../../state/jobs/jobsSlice";
function Jobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  const { data } = useSelector((state) => state.jobs.jobs);
  return (
    <div>
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full ">
          <h2 className="text-start text-2xl font-bold tracking-tight text-gray-900 mb-4">
            {data?.length} Jobs Found
          </h2>

          <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {data?.map((job) => (
              <Link key={job.id} to={`/job/${job.jobId}`}  className="group">
                <div className="flex gap-4 ">
                    <button className="h-10 w-10 bg-blue-500 border-blue-500 rounded-lg text-white text-xl font-semibold">
                        {job.companyName.charAt(0)}
                    </button>
                    <h3 className=" text-start text-sm text-blue-500">{job.companyName}
                </h3>
                </div>
                <h3 className="mt-4 text-start text-sm text-gray-700">{job.title}</h3>
                <p className="mt-1 text-start text-lg font-medium text-gray-900">
                  <span className="text-xs text-gray-700">Salary</span> {job.salary}
                </p>
                <p className="mt-1 text-start text-lg font-medium text-gray-900">
                  <span className="text-xs text-gray-700">Vacancy</span> {job.vacancy}
                </p>
                <div className="flex gap-2 mt-4">
                    <IoLocationOutline className=" text-xl text-gray-900"></IoLocationOutline>
                    <p className="text-start text-sm  text-gray-900">
                  {job.location}
                </p>
                </div>
                <div className="w-1/4 mt-2">
                <button className="bg-blue-500 h-6 text-xs w-12 border-blue-500 rounded-lg" >Apply</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jobs;
