import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useLocation } from "react-router-dom";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createUploadJob } from "../../state/create/createJobSlice";
import { MenuItem, TextField } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
const CreateJob = () => {
  const { user } = useSelector((state) => state.user);
  const { categories, cities, types, times } = useSelector(
    (state) => state.categories
  );
  const [category, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [city, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const [time, setSelectedTiume] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTiume(event.target.value);
  };
  const [type, setSelectedType] = useState("");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const token = user?.token;
  const dispatch = useDispatch();
  const locationn = useLocation();
  const pathname = locationn.pathname;
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  const [vacancy, setVancancy] = useState("");
  const [location, setLocation] = useState("");
  // const [city, setCity] = useState("");
  // const [type, setType] = useState("");
  // const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const handleCreate = (e) => {
    e.preventDefault();
    const data = {
      companyName,
      title,
      city,
      type,
      location,
      vacancy,
      category,
      time,
      description,
      salary,
    };
    console.log("data", data);
    dispatch(createUploadJob({ token, data }));
  };
  const { success } = useSelector((state) => state.uploadJob);
  useEffect(() => {
    if (success) {
      message.info("You successfully post e job wait for approval");
    }
  }, [success]);

  return (
    <div className="w-full ">
      <Navbar></Navbar>
      <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
        <a href="#" class="text-gray-600 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline">
          {pathname}
        </a>
      </div>

      <div className="mt-12 lg:w-3/4 mx-auto">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Create Job Post
          </h2>

          <form className="" onSubmit={handleCreate}>
            <div className="w-full b">
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="emailAddress"
                  >
                    Your Company Name
                  </label>
                  <input
                    id="emailAddress"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="w-full">
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="emailAddress"
                  >
                    Job Title Name
                  </label>
                  <input
                    id="emailAddress"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full mt-8 gap-4">
                <div className="w-full">
                  <TextField
                    id="outlined-select-category"
                    select
                    label="Select Category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full"
                  >
                    {categories?.data?.map((option) => (
                      <MenuItem key={option.value} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="w-full">
                  <TextField
                    id="outlined-select-category"
                    select
                    label="Select City"
                    value={city}
                    onChange={handleCityChange}
                    className="w-full"
                  >
                    {cities?.data?.map((option) => (
                      <MenuItem key={option.value} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              <div className="flex w-full gap-4 mt-8">
                <div className="w-full">
                  <TextField
                    id="outlined-select-category"
                    select
                    label="Select Job Type"
                    value={type}
                    onChange={handleTypeChange}
                    className="w-full"
                  >
                    {types?.data?.map((option) => (
                      <MenuItem key={option.value} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="w-full">
                  <TextField
                    id="outlined-select-category"
                    select
                    label="Select Job Time"
                    value={time}
                    onChange={handleTimeChange}
                    className="w-full"
                  >
                    {times?.data?.map((option) => (
                      <MenuItem key={option.value} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              <div className="flex w-full mt-4 gap-4">
                <div className="w-full">
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Vacancy
                  </label>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                    value={vacancy}
                    onChange={(e) => setVancancy(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Location
                  </label>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full gap-4 mt-4">
                <div className="w-full">
                  <label
                    className="text-gray-700 dark:text-gray-200 text-start"
                    for="passwordConfirmation"
                  >
                    Salary
                  </label>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Description
                  </label>
                  <TextArea
                    id="passwordConfirmation"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-12">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CreateJob;
