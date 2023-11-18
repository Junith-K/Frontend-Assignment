import React, { useContext, useEffect } from 'react';
import { FormContext } from '../App';

function Select(props) {
  props = props.edata;
  const { form, dispatch } = useContext(FormContext);

  useEffect(() => {
    dispatch({ type: 'update', jsonKey: props.jsonKey, value: props.validate.defaultValue });
  }, []); 

  const onChange = (e) => {
    dispatch({ type: 'update', jsonKey: props.jsonKey, value: e.target.value});
  };


  return (
    <div className="flex items-center space-x-2 mb-4">
      <label className="mr-2 text-lg font-bold">{props.label}</label>
      <select
        name={props.jsonKey}
        onChange={onChange}
        required={props.validate.required}
        className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      >
        {props.validate.options.map((e, index) => (
          <option key={index} value={e.value} selected={form[props.jsonKey] === e.value}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
