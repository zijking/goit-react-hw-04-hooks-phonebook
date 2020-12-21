import React from 'react';
import s from './Filter.module.css';

function Filter({ onChange, value }) {
  return (
    <>
      <label className={s.filter}>
        <span>Filter:</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
}

export default Filter;
