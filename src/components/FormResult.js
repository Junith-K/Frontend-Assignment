import React from 'react';

function FormResult({ form }) {
  const formEntries = Object.entries(form);
  return (
    <div className="bg-white p-4 mt-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-2">Form Result</h2>
      <ul className="list-disc pl-4">
        {formEntries.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value?.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormResult;
