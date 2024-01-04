import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/reducers/auth/authSlice";
import { Link } from "react-router-dom";
export default function Navbar() {
  const dispatch = useDispatch();
  const { token, firstName, lastName, role } = useSelector(
    (state) => state.user.user
  );
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  const handleLogout = () => {
    dispatch(logout());
    setActive(false);
  };
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative  flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  {/* <button
                    type="button"
                    className={token ? "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 bg-white p-2":"w-24 "}
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={showMenu}
                  >
                    {
                      token? `${firstName.charAt(0)} ${lastName.charAt(0)}` :<div>
                       <p className="text-xs text-white">   Sign in / Register</p>
                      </div>
                    }
                  </button> */}
                  {token ? (
                    <button
                      type="button"
                      className={
                        token
                          ? "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 bg-white p-2"
                          : "w-24 "
                      }
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={showMenu}
                    >
                      {token ? (
                        `${firstName.charAt(0)} ${lastName.charAt(0)}`
                      ) : (
                        <div>
                          <p className="text-xs text-white">
                            {" "}
                            Sign in / Register
                          </p>
                        </div>
                      )}
                    </button>
                  ) : (
                    <Link to="/user/login">
                      <button
                        type="button"
                        className="w-24"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <p className="text-xs text-white">
                          {" "}
                          Sign in / Register
                        </p>
                      </button>
                    </Link>
                  )}
                </div>
                {/* menubar  */}
                {token && role === "employer" && (
                  <div
                    className={
                      active
                        ? "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        : "hidden"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <Link
                      to="/employer/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 text-start"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/create/job"
                      className="block px-4 py-2 text-sm text-gray-700 text-start"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Create a Job Post
                    </Link>

                    <button
                      href="#"
                      className=" bg-red-500 w-3/4 mx-auto border-red-500  rounded-lg px-4 py-2 text-sm text-gray-700 mb-4 mt-4"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                )}
                {role === "user" && (
                  <div
                    className={
                      active
                        ? "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        : "hidden"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <Link
                      to="/my/profile"
                      className="block px-4 py-2 text-sm text-gray-700 text-start"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/my/apply"
                      className="block px-4 py-2 text-sm text-gray-700 text-start"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      My Apply Job
                    </Link>

                    <button
                      href="#"
                      className=" bg-red-500 w-3/4 mx-auto border-red-500  rounded-lg px-4 py-2 text-sm text-gray-700 mb-4 mt-4"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                )}
                {role === "admin" && (
                  <div
                    className={
                      active
                        ? "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        : "hidden"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 text-start"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Dashboard
                    </Link>
                    <button
                      href="#"
                      className=" bg-red-500 w-3/4 mx-auto border-red-500  rounded-lg px-4 py-2 text-sm text-gray-700 mb-4 mt-4"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
