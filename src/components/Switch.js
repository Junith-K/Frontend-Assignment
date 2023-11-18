import React, { useContext, useEffect } from 'react';
import { FormContext } from '../App';

function Switch(props) {
  props = props.edata;
  const { form, dispatch } = useContext(FormContext);

  useEffect(() => {
    dispatch({ type: 'update', jsonKey: props.jsonKey, value: props.validate.defaultValue });
  }, []); 

  const onChange = () => {
    const current = !form[props.jsonKey];
    dispatch({ type: 'update', jsonKey: props.jsonKey, value: current});
  };


  return (
    <div className="flex items-center space-x-2 mb-4">
      <label className="text-lg font-bold">{props.label}</label>
      <input
        type="checkbox"
        onChange={onChange}
        checked={form[props.jsonKey]}
        required={props.validate.required}
        className="form-checkbox h-4 w-4 text-blue-500"
      />
    </div>
  );
}

export default Switch;
