import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryRemoved, categorySelected } from "../../state/filter/filterReducers";

function Categories({ name }) {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.filterSlice);

    const isSelected =categories.includes(name) ? true : false
    console.log("isSelected",isSelected);

    const style = isSelected ? 'text-slate-600  h-8 pt-1  text-start font-semibold  mt-1 ' : 'h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(categoryRemoved(name));
             
        } else {
             dispatch(categorySelected(name));
        }
    }
  return (
    <div>
      <p  className={style} onClick={handleSelect}>
        <input type="checkbox" className="text-start" />
        <span className="ml-2">{name}</span>
      </p>
    </div>
  );
}

export default Categories;
