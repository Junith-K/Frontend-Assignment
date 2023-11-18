import React, { useEffect } from 'react';
import DynamicForm from './DynamicFormElement';
import { useState, useContext } from 'react';
import { FormContext } from '../App';

function Ignore(props) {
  props = props.edata;
  const { form } = useContext(FormContext);
  const [ignore, setIgnore] = useState(true);

  useEffect(() => {
    props.conditions.forEach((condition) => {
      if (form[condition.jsonKey] === condition.value) setIgnore(false);
      else setIgnore(true);
    });
  }, [form]);

  return (
    <div className={ignore ? 'hidden' : 'block'}>
      {!ignore && <DynamicForm edata={{ ...props, uiType: 'Group' }} />}
    </div>
  );
}

export default Ignore;
