import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployerAllJobs } from "../../state/employer/employerJobsSlice";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  height: 400,
  boxShadow: 24,
  p: 4,
};
function EmployerALlJobs() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchEmployerAllJobs({ token }));
  }, [dispatch, token]);
  const { data } = useSelector((state) => state.pendingJob.allJobs);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full ">
        <div className="flex justify-between">
          <h2 className="text-start text-2xl font-bold tracking-tight text-gray-900 mb-4">
            {data?.length} Jobs Found
          </h2>
          <button className="bg-blue-500 h-6 text-xs w-20 border-blue-500 rounded-lg"   onClick={handleOpen}>
            Create Job
          </button>
        </div>
        <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 ">
          {data?.map((job) => (
            <Link
              key={job.id}
              to={`/job/${job.jobId}`}
              className="group border rounded-lg p-4"
            >
              <div className="flex gap-4 ">
                <button className="h-10 w-10 bg-blue-500 border-blue-500 rounded-lg text-white text-xl font-semibold">
                  {job.companyName.charAt(0)}
                </button>
                <h3 className=" text-start text-sm text-blue-500">
                  {job.companyName}
                </h3>
              </div>
              <h3 className="mt-4 text-start text-sm text-gray-700">
                {job.title}
              </h3>
              <p className="mt-1 text-start text-lg font-medium text-gray-900">
                <span className="text-xs text-gray-700">Salary</span>{" "}
                {job.salary}
              </p>
              <p className="mt-1 text-start text-lg font-medium text-gray-900">
                <span className="text-xs text-gray-700">Vacancy</span>{" "}
                {job.vacancy}
              </p>
              <div className="flex gap-2 mt-4">
                <IoLocationOutline className=" text-xl text-gray-900"></IoLocationOutline>
                <p className="text-start text-sm  text-gray-900">
                  {job.location}
                </p>
              </div>
              {/* <div className="w-1/4 mt-2">
            <button className="bg-blue-500 h-6 text-xs w-12 border-blue-500 rounded-lg" >Apply</button>
            </div> */}
            </Link>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}></Box>
      </Modal>
    </div>
  );
}

export default EmployerALlJobs;
