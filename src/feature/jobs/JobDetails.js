import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid white",
  height: 500,
  boxShadow: 24,
  p: 4,
};
function JobDetails() {
  const { jobId } = useParams();
  console.log("jobid --- ", jobId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobDetails(jobId));
    dispatch(fetchJobApplyCount(jobId));
  }, [dispatch, jobId]);
  const { data } = useSelector((state) => state.jobDetails.job);
  const { count } = useSelector((state) => state.jobDetails);
  const { token } = useSelector((state) => state.user.user);
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const companyName = data?.companyName;
  const title = data?.title;

  const [resume, setResume] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [education, setEduName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const updateProfileDataChange = (event) => {
    const selectedFile = event.target.files[0];
    setResume(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      companyName,
      title,
      jobId,
      firstName,
      lastName,
      email,
      phone,
      address,
      education,
      degree,
      resume,
    };
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
  useEffect(() => {
    if (user) {
      setResume(user?.resume);
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setEmail(user?.email);
      setPhone(user?.phone);
      setAddress(user?.address);
      setDegree(user?.degree);
      setEduName(user?.education);
      setResume(user?.resume);
    }
  }, [user]);
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="md:w-3/4 mx-auto md:flex gap-4 justify-between items-center">
        <div className="w-full border rounded-lg p-4 mt-12">
          <div className="flex gap-4 ">
            <button className="h-10 w-12 bg-teal-500 border-teal-500 rounded-lg text-white text-2xl font-semibold">
              {data?.companyName.charAt(0)}
            </button>
            <div>
              <h3 className=" text-start text-sm text-teal-500">
                {data?.companyName}
              </h3>
              <h3 className=" text-start text-sm text-teal-500">
                {formatDate(data?.createdAt)}
              </h3>
            </div>
          </div>
          <h3 className="mt-4 text-start text-sm text-gray-700">
            {data?.title}
          </h3>
          <p className="mt-1 text-start text-lg font-medium text-gray-900">
            <span className="text-xs text-gray-700">Vacancy</span>{" "}
            {data?.vacancy}
          </p>
          <p className="mt-1 text-start text-lg font-medium text-gray-900">
            <span className="text-xs text-gray-700"></span>
            {count.data && `${count.data} Apply`}
            {!count.data && " apply yet"}
          </p>
          <div className="flex gap-4">
            <div className="flex gap-2 mt-4 bg-teal-300 border border-teal-300 rounded-lg p-1">
              <p className="text-start text-sm  text-gray-900">{data?.type}</p>
            </div>

            <div className="flex gap-2 mt-4 border border-teal-500 rounded-lg p-1">
              <IoLocationOutline className=" text-xl text-gray-900"></IoLocationOutline>
              <p className="text-start text-sm  text-gray-900">
                {data?.location}
              </p>
            </div>
            <div className="flex gap-2 mt-4 bg-teal-300 border border-teal-300 rounded-lg p-1">
              <FaBangladeshiTakaSign className=" text-xl text-gray-900"></FaBangladeshiTakaSign>
              <p className="text-start text-sm  text-gray-900">
                {data?.salary} per month
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 mx-auto mt-12 border border-blue-100 h-44 rounded-lg bg-blue-100 ">
          <h1 className="text-3xl mt-12 ">Are You Interested ?</h1>
          {token? <button
            className="bg-teal-500 h-8 mt-8  text-sm font-semibold w-3/4 mx-auto border-teal-500 rounded-lg"
            onClick={handleOpen}
          >
            Apply
          </button>:<Link to="/user/login">
          <button
            className="bg-teal-500 h-8 mt-8  text-sm font-semibold w-3/4 mx-auto border-teal-500 rounded-lg"
          >
           Be log in 
          </button></Link>}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="lg:w-2/4 mx-auto bg-white p-12 mt-12 lg:mt-24">
          <form onSubmit={handleSubmit}>
            <div className="lg:flex gap-4">
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="lg:flex gap-4">
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Phone"
                  aria-label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Degree"
                  aria-label="Degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>
            </div>
            <div className="lg:flex gap-4">
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Versity Name"
                  aria-label="Versity Name"
                  value={education}
                  onChange={(e) => setEduName(e.target.value)}
                />
              </div>
              <div class="w-full mt-4">
                <input
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="Address"
                  aria-label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 lg:flex">
              <input
                type="file"
                id="direct-upload-input"
                onChange={updateProfileDataChange}
                accept="application/pdf"
                className="mt-4"
              />
              <button class="mt-4 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Apply
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <Footer></Footer>
    </div>
  );
}

export default JobDetails;
