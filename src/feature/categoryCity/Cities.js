import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cityRemoved, citySelected } from '../../state/filter/filterReducers';

const Cities = ({name}) => {
    const dispatch = useDispatch();
    const { cities } = useSelector((state) => state.filterSlice);
    const isSelected =cities.includes(name) ? true : false

    const style = isSelected ? 'text-slate-600  h-8 pt-1  text-start font-semibold  mt-1 ' : 'h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(cityRemoved(name));
        } else {
             dispatch(citySelected(name));
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

export default Cities;