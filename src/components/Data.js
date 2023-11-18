import React from "react";

import { FcInfo } from "react-icons/fc";

function Description(props) {
  return (
    <div class="relative inline-block border-b border-dotted border-black ">
      {props.description != "" ? (
        <div>
          <FcInfo />
        </div>
      ) : (
        ""
      )}{" "}
      <span class="hidden w-120 bg-black text-white text-center rounded-md py-1 px-2 absolute z-10 hover:visible">
        {props.description}
      </span>
    </div>
  );
}

export default Description;
