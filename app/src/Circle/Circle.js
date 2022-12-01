import React from "react";

const Circle = () => {
  return (
    <div>
      <svg className="xo" height="110" width="110">
        <circle
          cx="55"
          cy="55"
          r="43"
          stroke="#E43A20"
          strokeWidth={12}
          fillOpacity="0"
        ></circle>
      </svg>
    </div>
  );
};

export default Circle;
