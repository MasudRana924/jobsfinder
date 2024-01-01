import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { createApplyJob } from "../../state/applyJob/applyJobSlice";
import {
  fetchJobApplyCount,
  fetchJobDetails,
} from "../../state/jobs/jobDetailsSlice";
import { message } from "antd";
import { formatDate } from "../../utilities/helper";
import Footer from "../../components/common/Footer";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
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
function JobDetails() {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobDetails(jobId));
    dispatch(fetchJobApplyCount(jobId));
  }, [dispatch, jobId]);
  const { data } = useSelector((state) => state.jobDetails.job);
  const { count } = useSelector((state) => state.jobDetails);
  const { token } = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const companyName = data?.companyName;
  const title = data?.title;
  //   const jobId=jobid
  const Data = { companyName, title, jobId };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createApplyJob({
        Data,
        token,
      })
    );
  };
  const { success } = useSelector((state) => state.apply);
  useEffect(() => {
    if (success) {
      message.info("Applied Done");
    }
  }, [success]);
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <div className="w-full lg:w-2/4 mx-auto  mt-12 p-12">
        <div className="flex gap-4 ">
          <button className="h-10 w-10 bg-teal-500 border-teal-500 rounded-lg text-white text-xl font-semibold">
            {data?.companyName.charAt(0)}
          </button>
          <div>
                   <h3 className=" text-start text-sm text-teal-500">{data?.companyName}</h3>
                    <h3 className=" text-start text-sm text-teal-500">{formatDate(data?.createdAt)}</h3>
                   </div>
        </div>
        <h3 className="mt-4 text-start text-sm text-gray-700">{data?.title}</h3>
        <p className="mt-1 text-start text-lg font-medium text-gray-900">
          <span className="text-xs text-gray-700">Salary</span> {data?.salary}
        </p>
        <p className="mt-1 text-start text-lg font-medium text-gray-900">
          <span className="text-xs text-gray-700">Vacancy</span> {data?.vacancy}
        </p>
        <p className="mt-1 text-start text-lg font-medium text-gray-900">
          <span className="text-xs text-gray-700"></span>{count.data && `${count.data} Apply`}{!count.data && " apply yet"}
        </p>
        <div className="flex gap-2 mt-4">
          <IoLocationOutline className=" text-xl text-gray-900"></IoLocationOutline>
          <p className="text-start text-sm  text-gray-900">{data?.location}</p>
        </div>
        <p className="text-start text-sm  text-gray-900 mt-4">
          {data?.description}
        </p>
        <div className="w-2/4  mt-4">
          <button
            className="bg-teal-500 h-6 text-xs w-full border-teal-500 rounded-lg"
            onClick={handleSubmit}
          >
            Apply
          </button>
        </div>
      </div> */}
      <div className="md:w-3/4 mx-auto md:flex gap-4 justify-between items-center">
        <div className="w-full border rounded-lg p-4 mt-12">
          <div className="flex gap-4 ">
            <button className="h-10 w-12 bg-teal-500 border-teal-500 rounded-lg text-white text-2xl font-semibold">
              {data.companyName.charAt(0)}
            </button>
            <div>
              <h3 className=" text-start text-sm text-teal-500">
                {data.companyName}
              </h3>
              <h3 className=" text-start text-sm text-teal-500">
                {formatDate(data.createdAt)}
              </h3>
            </div>
          </div>
          <h3 className="mt-4 text-start text-sm text-gray-700">
            {data.title}
          </h3>
          {/* <p className="mt-1 text-start text-lg font-medium text-gray-900">
              <span className="text-xs text-gray-700">Salary</span> {job.salary}
            </p> */}
          <p className="mt-1 text-start text-lg font-medium text-gray-900">
            <span className="text-xs text-gray-700">Vacancy</span>{" "}
            {data.vacancy}
          </p>
          <div className="flex gap-4">
            <div className="flex gap-2 mt-4 bg-teal-300 border border-teal-300 rounded-lg p-1">
              <p className="text-start text-sm  text-gray-900">{data.type}</p>
            </div>

            <div className="flex gap-2 mt-4 border border-teal-500 rounded-lg p-1">
              <IoLocationOutline className=" text-xl text-gray-900"></IoLocationOutline>
              <p className="text-start text-sm  text-gray-900">
                {data.location}
              </p>
            </div>

            <div className="flex gap-2 mt-4 bg-teal-300 border border-teal-300 rounded-lg p-1">
              <FaBangladeshiTakaSign className=" text-xl text-gray-900"></FaBangladeshiTakaSign>
              <p className="text-start text-sm  text-gray-900">
                {data.salary} per month
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 mx-auto mt-12 border border-blue-100 h-44 rounded-lg bg-blue-100 ">
          <h1 className="text-3xl mt-12 ">Are You Interested ?</h1>
          <button
            className="bg-teal-500 h-8 mt-8  text-sm font-semibold w-3/4 mx-auto border-teal-500 rounded-lg"
            onClick={handleSubmit}
          >
            Apply
          </button>
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
      <Footer></Footer>
    </div>
  );
}

export default JobDetails;
