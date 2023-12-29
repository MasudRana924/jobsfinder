import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timeRemoved, timeSelected } from '../../state/filter/filterReducers';

const Times = ({name}) => {
    const dispatch = useDispatch();
    const { times } = useSelector((state) => state.filterSlice);

    const isSelected =times.includes(name) ? true : false

    const style = isSelected ? 'text-slate-600  h-8 pt-1  text-start font-semibold  mt-1 ' : 'h-8  pt-1  text-start font-semibold text-slate-600 mt-1 '
    const handleSelect = () => {
        if (isSelected) {
             dispatch(timeRemoved(name));
        } else {
             dispatch(timeSelected(name));
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

export default Times;