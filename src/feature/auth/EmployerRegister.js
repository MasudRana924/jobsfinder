import React from 'react';
import { Alert } from 'antd';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUserRegister } from "../../state/reducers/auth/registerSlice";
const EmployerRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const role='employer'
    const registerSubmit = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("firstName", firstName);
      myForm.set("lastName", lastName);
      myForm.set("email", email);
      myForm.set("password", password);
      myForm.set("role", role);
      dispatch(createUserRegister(myForm));
    };
    const { errorMessage, success } = useSelector((state) => state.register);
    useEffect(() => {
      if (success) {
        navigate("/employer/login");
      }
    }, [success, navigate]);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
        <div className=" w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
          <div className=" w-2/4 mx-auto flex  items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <p className="text-xl text-violet-500">CareerPulse</p>
                </div>
              </Link>
            </div>
  
            <form onSubmit={registerSubmit}>
              <div className="w-full mt-8">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
  
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {
                errorMessage? <Alert className="mt-4" type="error" message={errorMessage} banner />:null
              }
             
              <button className="w-full mt-4 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50">
                Register
              </button>
            </form>
          </div>
         
          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Already have an account?{" "}
            </span>
  
            <a
              href="/employer/login"
              className="mx-2 text-sm font-bold text-teal-500 dark:text-blue-400 hover:underline"
            >
              login
            </a>
          </div>
        </div>
      </div>
    );
};

export default EmployerRegister;