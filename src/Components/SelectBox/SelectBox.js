import React from 'react';
import Select, { components } from 'react-select';

import './SelectBox.css';

const selectBox = (props) => {
  return (
    <div className={'select-group ' + (props.isError ? 'has-error' : '')}>
      <Select
        isSearchable={false}
        placeholder={props.placeHolder}
        aria-labelledby={props.id}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.handleChange}
        options={props.options}
        classNamePrefix={'select-opt'}
        // defaultMenuIsOpen= {true}
        {...props.other}
      />
    </div>
  );
};

export default selectBox;
