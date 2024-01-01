import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchCities,
  fetchTimes,
  fetchTypes,
} from "../../state/category/extraSlice";
import Categories from "./Categories";
import Cities from "./Cities";
import Types from "./Types";
import Times from "./Times";
import './Category.css'
import { useState } from "react";
function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCities());
    dispatch(fetchTypes());
    dispatch(fetchTimes());
  }, [dispatch]);
  const { categories, cities,types,times } = useSelector((state) => state.categories);

  return (
    <div className="w-3/4 mx-auto" >
      <div className="grid lg:grid-cols-4 gap-x-4  ">
        <div >
          <h3 className="text-start text-sm mt-6">Find by Category</h3>
          <div className="w-full mt-4">
            {categories?.data?.map((cat) => (
              <Categories key={cat._id} name={cat.name}></Categories>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-start text-sm mt-6">Find by City</h3>
          <div className="w-full mt-4">
            {cities?.data?.map((cat) => (
              <Cities key={cat._id} name={cat.name}></Cities>
            ))}
          </div>
        </div>
   
          <div>
            <h3 className="text-start text-sm mt-6">Find by Job Time </h3>
            <div className="w-full mt-4">
              {times?.data?.map((cat) => (
                <Times key={cat._id} name={cat.name}></Times>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-start text-sm mt-6">Find by Job Type</h3>
            <div className="w-full mt-4">
              {types?.data?.map((cat) => (
                <Types key={cat._id} name={cat.name}></Types>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default Category;
