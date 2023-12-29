import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchCities } from "../../state/category/extraSlice";
import Categories from "./Categories";
import Cities from "./Cities";

function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCities());
  }, [dispatch]);
  const { categories, cities } = useSelector((state) => state.categories);
  return (
    <div className="w-full  ">
      {/* <div class="relative mt-6 w-3/4 mx-auto">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          class="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          placeholder="Search"
        />
      </div> */}
      <div className="w-3/4 mx-auto grid lg:grid-cols-2 gap-x-4">
        <div>
          <h3 className="text-start text-sm mt-6">Find by Category</h3>
          <div className="w-full mt-4">
            {categories?.data?.map((cat)=><Categories key={cat._id} name={cat.name}></Categories>)}
          </div>
        </div>
        <div>
          <h3 className="text-start text-sm mt-6">Find by City</h3>
          <div className="w-full mt-4">
           
              {cities?.data?.map((cat)=><Cities key={cat._id} name={cat.name}></Cities>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
