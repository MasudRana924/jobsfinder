import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeRemoved, typeSelected } from '../../state/filter/filterReducers';

const Types = ({name}) => {
    const dispatch = useDispatch();
    const { types } = useSelector((state) => state.filterSlice);

    const isSelected =types.includes(name) ? true : false

    const style = isSelected ? 'text-slate-600  h-8 pt-1  text-start font-semibold  mt-1 ' : 'h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(typeRemoved(name));
        } else {
             dispatch(typeSelected(name));
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
};

export default Types;