import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployerAllJobs } from "../../state/employer/employerJobsSlice";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { TextField } from "@mui/material";
import { createUploadJob } from "../../state/create/createJobSlice";
import { message } from 'antd';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid white",
  height: 500,
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


  const [companyName, setcompanyName] = useState(false);
  const [title, setTitle] = useState(false);
  const [city, setCity] = useState(false);
  const [vacancy, setVacancy] = useState(false);
  const [location, setLocation] = useState(false);
  const [salary, setSalary] = useState(false);
  const [category, setCategory] = useState(false);
  const [description, setDescription] = useState(false);
  const Data={companyName,title,city,vacancy,location,salary,category,description};
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createUploadJob({
        Data,token
    }));
  }
  const { success } = useSelector((state) => state.uploadJob);
  const types = [
    {
      label: "Choose Category ",
    },
    {
      value: "Video Editor",
      label: "Video Editor",
    },
    {
      value: "SQA Engineer",
      label: "SQA Engineer",
    },
    {
      value: "Graphics Designer",
      label: "Graphics Designer",
    },
    {
      value: "Web Development",
      label: "Web Development",
    },
    {
      value: "App Development",
      label: "App Development",
    },
    {
      value: "IT Service",
      label: "IT Service",
    },
  ];
  const cities = [
    {
      label: "Choose City ",
    },
    {
      value: "Dhaka",
      label: "Dhaka",
    },
    {
      value: "Mymensingh",
      label: "Mymensingh",
    },
    {
      value: "Khulna",
      label: "Khulna",
    },
    {
      value: "Sylhet",
      label: "Sylhet",
    },
    {
      value: "Barishal",
      label: "Barishal",
    },
    {
      value: "Rangpur",
      label: "Rangpur",
    },
  ];

  useEffect(() => {
    if (success) {
        // Show success message
        message.info("Job Posted ");
        // Navigate after 1 second
        const timerId = setTimeout(() => {
          setOpen(false);
        }, 1000);
        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timerId);
    }
}, [success]);
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full ">
        <div className="flex justify-between">
          <h2 className="text-start text-2xl font-bold tracking-tight text-gray-900 mb-4">
            {data?.length} Jobs Found
          </h2>
          <button
            className="bg-teal-500 h-6 text-xs w-20 border-teal-500 rounded-lg"
            onClick={handleOpen}
          >
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
                <button className="h-10 w-10 bg-teal-500 border-teal-500 rounded-lg text-white text-xl font-semibold">
                  {job.companyName.charAt(0)}
                </button>
                <h3 className=" text-start text-sm text-teal-500">
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
            <button className="bg-teal-500 h-6 text-xs w-12 border-teal-500 rounded-lg" >Apply</button>
            </div> */}
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default EmployerALlJobs;
