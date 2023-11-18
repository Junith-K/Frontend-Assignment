import React, { useContext, useEffect } from 'react';
import { FormContext } from '../App';

function Input(props) {
  props = props.edata;
  const { form, dispatch } = useContext(FormContext);

  useEffect(() => {
    dispatch({ type: 'update', jsonKey: props.jsonKey, value: props.validate.defaultValue });
  }, []); 

  const onChange = (e) => {
    dispatch({ type: 'update', jsonKey: props.jsonKey, value: e.target.value});
  };

  return (
    <input
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      readOnly={props.immutable}
      pattern={props.pattern}
      value={form[props.jsonKey] || ''}
      onChange={onChange}
      required={props.validate.required}
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
  );
}

export default Input;
