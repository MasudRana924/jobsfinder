import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../../utilities/helper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { fetchFilterJobs } from "../../state/filter/filterSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useState } from "react";
function Jobs() {
  const dispatch = useDispatch();
  const { cities, categories, types, times } = useSelector(
    (state) => state.filterSlice
  );

  const { data } = useSelector((state) => state.filter.filterJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = data?.totalJobs;
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    dispatch(
      fetchFilterJobs({ categories, cities, types, times, page: newPage })
    );
  };
  useEffect(() => {
    dispatch(fetchFilterJobs({ categories, cities, types, times }));
  }, [dispatch, categories, cities, types, times]);

  return (
    <div className="  mx-auto w-full ">
      <h2 className="text-start text-2xl font-bold text-gray-900 mb-4 m-4 lg:m-4">
        {data?.totalJobs} Jobs Found
      </h2>

      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 m-4">
        {data?.jobs?.map((job) => (
          <Link
            key={job.id}
            to={`/job/${job.jobId}`}
            className="group border rounded-lg p-4"
          >
            <div className="flex gap-4 ">
              <button className="h-10 w-12 bg-teal-500 border-teal-500 rounded-lg text-white text-2xl font-semibold">
                {job.companyName.charAt(0)}
              </button>
              <div>
                <h3 className=" text-start text-sm text-teal-500">
                  {job.companyName}
                </h3>
                <h3 className=" text-start text-sm text-teal-500">
                  {formatDate(job.createdAt)}
                </h3>
              </div>
            </div>
            <h3 className="mt-4 text-start text-sm text-gray-700">
              {job.title}
            </h3>
            <p className="mt-1 text-start text-lg font-medium text-gray-900">
              <span className="text-xs text-gray-700">Vacancy</span>{" "}
              {job.vacancy}
            </p>
            <div className="md:flex gap-4">
              <div className="flex gap-2 mt-4 bg-teal-300 border border-teal-300 rounded-lg p-1">
                <p className="text-start text-sm  text-gray-900">{job.type}</p>
              </div>

              <div className="flex gap-2 mt-4 border border-teal-500 rounded-lg p-1">
                <IoLocationOutline className=" text-xl text-gray-900"></IoLocationOutline>
                <p className="text-start text-sm  text-gray-900">
                  {job.location}
                </p>
              </div>

              <div className="flex gap-2 mt-4 bg-teal-300 border border-teal-300 rounded-lg p-1">
                <FaBangladeshiTakaSign className=" text-xl text-gray-900"></FaBangladeshiTakaSign>
                <p className="text-start text-sm  text-gray-900">
                  {job.salary} per month
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Stack spacing={2} className="lg:w-1/4 mx-auto mt-12">
        <Pagination
          count={Math.ceil(totalItems / itemsPerPage)}
          page={currentPage}
          color="primary"
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
export default Jobs;
