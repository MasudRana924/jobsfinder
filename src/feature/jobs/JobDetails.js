import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { createApplyJob } from "../../state/applyJob/applyJobSlice";
import { fetchJobApplyCount, fetchJobDetails } from "../../state/jobs/jobDetailsSlice";
import {message} from 'antd';
import { formatDate } from "../../utilities/helper";
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
  const { count} = useSelector((state) => state.jobDetails);
  const { token } = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const companyName=data?.companyName;
  const title=data?.title;
//   const jobId=jobid
  const Data={companyName,title,jobId};
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createApplyJob({
        Data,token
    }));
  }
  const { success } = useSelector((state) => state.apply);
  useEffect(() => {
    if (success) {
      message.info("Applied Done");
    }
  }, [success]);
  return (
    <div className="lg:w-3/4 mx-auto ">
      <Navbar></Navbar>
      <div className="w-full lg:w-2/4 mx-auto  mt-12 p-12">
        <div className="flex gap-4 ">
          <button className="h-10 w-10 bg-blue-500 border-blue-500 rounded-lg text-white text-xl font-semibold">
            {data?.companyName.charAt(0)}
          </button>
          <div>
                   <h3 className=" text-start text-sm text-blue-500">{data?.companyName}</h3>
                    <h3 className=" text-start text-sm text-blue-500">{formatDate(data?.createdAt)}</h3>
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
            className="bg-blue-500 h-6 text-xs w-full border-blue-500 rounded-lg"
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
    </div>
  );
}

export default JobDetails;
