import React, { useReducer, useRef, createContext, useState, useEffect } from 'react';
import DynamicFormElement from './components/DynamicFormElement.js';
import FormResult from './components/FormResult.js';  
import './App.css';

const initialState = {};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.jsonKey]: action.value };
    case 'reset':
      return {};
    case 'removeKey':
      const newState = { ...state };
      delete newState[action.jsonKey];
      return newState;
    default:
      return state;
  }
};


export const FormContext = createContext(null);

function Component({ ele }) {
  return <DynamicFormElement edata={ele} />;
}

function App() {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [parsedJson, setParsedJson] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);  
  const inputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState(''); 
  const [showForm, seShowForm] = useState(false);
  const [dupForm, setDupForm] = useState()

  const parseJson = (x) => {
    try {
      return JSON.parse(x);
    } catch (e) {
      alert('Incorrect json: ' + e.message);
      return [];
    }
  };

  const onMakeForm = () => {
    seShowForm(false);
    const json = parseJson(inputValue);
  
    if (!Array.isArray(json)) {
      alert('Input should be a JSON array.');
      return;
    }
  
    setParsedJson(json);
    setShowResult(false);
  };
  

  useEffect(()=>{
    if(parsedJson?.length>0){
      seShowForm(true)
    }
  },[parseJson])

  const onSubmitForm = (e) => {
    e.preventDefault();
    setDupForm(form)
    setShowResult(true); 
  };

  return (
    <div className="flex h-max bg-red-300">
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
        <label className="text-xl font-bold text-white">Input</label>
        <div className="flex items-center space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={onMakeForm}
          >
            Submit
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => {
              seShowForm(false)
              dispatch({type: 'reset'})
              setParsedJson([]);
              inputRef.current = ""
              setShowResult(false);
              setInputValue("")
            }}
          >
            Clear
          </button>
        </div>

        <textarea
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter your Input'
          className="w-full h-96 px-4 py-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white text-gray-800"
        />
        </div>
        {showResult && <FormResult form={dupForm} />}
      </div>
      <div className="w-1/2 p-6">
        <label className="text-xl font-bold text-white">Output</label>
        <div className="border border-gray-300 mt-4 bg-gray-50 rounded-md p-4 overflow-y-auto">
          <FormContext.Provider value={{ form, dispatch }}>
            <form onSubmit={onSubmitForm}>
              {showForm && parsedJson?.length>0 ? parsedJson.map((ele, index) => (
                <Component key={index} ele={ele} />
              )):<></>}
              {showForm && <input
                type="submit"
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                value="Submit"
              />}
            </form>
          </FormContext.Provider>
        </div>
      </div>
    </div>  
  );
}

export default App;
