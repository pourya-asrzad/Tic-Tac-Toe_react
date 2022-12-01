import React from "react";

const Cross = () => {
  return (
    <div>
      <svg className="xo" height="100" width="100">
        <line
          x1="10"
          y1="10"
          x2="90"
          y2="90"
          style={{ stroke: "#00AAC4", "stroke-width": 12 }}
        ></line>
        <line
          x1="90"
          y1="10"
          x2="10"
          y2="90"
          style={{ stroke: "#00AAC4", "stroke-width": 12 }}
        ></line>
      </svg>
    </div>
  );
};

export default Cross;
