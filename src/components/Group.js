import React from 'react';
import DynamicFormElement from './DynamicFormElement';

function Group({ edata }) {
  return (
    <div className="bg-gray-100 p-4 m-4 rounded-md">
      {edata.subParameters.map((subParameter) => {
        const newSubParameter = { ...subParameter, jsonKey: edata.jsonKey + '.' + subParameter.jsonKey };
        return <DynamicFormElement key={newSubParameter.jsonKey} edata={newSubParameter} />;
      })}
    </div>
  );
}

export default Group;
