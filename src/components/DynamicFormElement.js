import React from "react";
import Input from "./Input";
import Ignore from "./Rand";
import Radio from "./Radio";
import Select from "./Select";
import Switch from "./Switch";
import Group from "./Group";
import Description from "./Data";

function DynamicFormElement(props) {
  const { label, description, uiType } = props.edata;

  switch (uiType) {
    case "Input":
      return (
        <div className="p-4 m-4 bg-white shadow-md rounded-md ">
          <label className="text-lg font-bold">{label}</label>
          <Description description={description} />
          <Input edata={props.edata} />
        </div>
      );
    case "Group":
      return (
        <div className="p-4 m-4 bg-white shadow-md rounded-md">
          {" "}
          <label className="text-lg font-bold">{label}</label>
          <Description description={description} />
          <Group edata={props.edata} />
        </div>
      );
    case "Radio":
      return (
        <div className="p-4 m-4 bg-white shadow-md rounded-md">
          <Radio edata={props.edata} />
        </div>
      );
    case "Select":
      return (
        <div className="p-4 m-4 bg-white shadow-md rounded-md">
          <Select edata={props.edata} />
        </div>
      );
    case "Switch":
      return (
        <div className="p-4 m-4 bg-white shadow-md rounded-md">
          <Switch edata={props.edata} />
        </div>
      );
    case "Ignore":
      return <Ignore edata={props.edata} />;
  }
}

export default DynamicFormElement;
