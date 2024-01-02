import React from "react";
import Navbar from "../../components/common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdeminJobs } from "../../state/admin/adminAllJobSlice";
import Footer from "../../components/common/Footer";
import { formatDate } from "../../utilities/helper";
import { useState } from "react";
import { updateJobStatus } from "../../state/admin/upDateSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchAdeminJobs({ token }));
  }, [dispatch, token]);
  const { data } = useSelector((state) => state.admin.allJobs);

  const [status, setIsChecked] = useState("");
  const handleUpdate = (jobId) => {
    if (status) {
      const dataa ={status};
      dispatch(updateJobStatus({ token, jobId, dataa}));
    }
  };
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div classNameName="lg:w-3/4 mx-auto mb-12">
        <section className="container px-4 mx-auto mt-12">
          <h2 className="text-start text-lg font-medium text-gray-800 dark:text-white">
            Admin Panel
          </h2>

          <p className="mt-1 text-start text-sm text-gray-500 dark:text-gray-300">
            All jobs have posted in the last 12 months.
          </p>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Company Name
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                        >
                          Posted date
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 "
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {data?.map((dt) => (
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <div>
                              <h2 className="text-start font-medium text-gray-800 dark:text-white ">
                                {dt.companyName}
                              </h2>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                            <div className=" text-start inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              {dt.status}
                            </div>
                          </td>
                          <td className="px-4 text-start  py-4 text-sm whitespace-nowrap">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">
                                {formatDate(dt.createdAt)}
                              </p>
                            </div>
                          </td>

                          {dt?.status === "pending" && (
                            <td>
                              <div className="flex justify-between">
                                
                                <select
                                  name="Status"
                                  className="w-full h-12  text-xs p-2"
                                  value={status}
                                  onChange={(e) => setIsChecked(e.target.value)}
                                >
                                  <option>Select Status</option>
                                  <option>approved </option>
                                  <option>declined</option>
                                </select>
                              </div>
                            </td>
                          )}

                          {dt?.status === "pending" ? (
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                className="px-1 py-1 bg-teal-500 border border-teal-500 text-white w-16 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-teal-500"
                                onClick={() => handleUpdate(dt._id)}
                              >
                                save
                              </button>
                            </td>
                          ) : null}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>previous</span>
            </a>

            <div className="items-center hidden md:flex gap-x-3">
              <a
                href="#"
                className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
              >
                1
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                2
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                3
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                ...
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                12
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                13
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                14
              </a>
            </div>

            <a
              href="#"
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminDashboard;
