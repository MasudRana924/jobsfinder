import React from "react";
import Navbar from "../../components/common/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../state/reducers/auth/authSlice";
import Footer from "../../components/common/Footer";

const EditProfile = () => {
  const { user } = useSelector((state) => state.user);
  const token = user?.token;
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
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
  // const updateProfileDataChange = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setResumePreview(reader.result);
  //       setResume(e.target.files[0]);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("education", education);
    formData.append("degree", degree);
    formData.append("resume", resume);
    dispatch(updateUserProfile({ token, data: formData }));
  };
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
            Account Update
          </h2>

          <form className="" onSubmit={handleUpdateProfile}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Last Name
                </label>
                <input
                  id="emailAddress"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Last Name
                </label>
                <input
                  id="emailAddress"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" for="Email">
                  Email
                </label>
                <input
                  id="password"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Phone
                </label>
                <input
                  id="passwordConfirmation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Address
                </label>
                <input
                  id="passwordConfirmation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Highest Degree
                </label>
                <input
                  id="passwordConfirmation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  University Name
                </label>
                <input
                  id="passwordConfirmation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-teal-300 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring"
                  value={education}
                  onChange={(e) => setEduName(e.target.value)}
                />
              </div>
              <div className="mt-8">
                
              {user?.resume && (
        <iframe
          title="Resume PDF"
          width="100%"
          height="200px"
          src={user?.resume}
          type="application/pdf"
          className="mb-8"
        >
          Your browser does not support PDFs.
        </iframe>
      )}
                <input
                  type="file"
                  id="direct-upload-input"
                  onChange={updateProfileDataChange}
                  accept="application/pdf"
                />
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

export default EditProfile;
