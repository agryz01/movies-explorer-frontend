import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox(props) {

  const classNameTogle = props.togle ? 'filter__togle filter__togle_active' : 'filter__togle';
  const classNameTogleRing = props.togle ? 'filter__togle-ring filter__togle-ring_active' : 'filter__togle-ring';

  return (
    <label className='filter'>
      <div onClick={props.onClick} className={classNameTogle}>
        <div className={classNameTogleRing}></div>
      </div>
      <span className='filter__text-checkbox'>Короткометражки</span>
    </label>
  )
}