import React from "react";

const Select = (props) => {
  function getselectval(event) {
    props.onChangeSelect(event.target.value);
  }
  return (
    <div>
      <select onChange={getselectval} disabled={props.disable}>
        <option value="O">O</option>
        <option value="X">X</option>
      </select>
    </div>
  );
};

export default Select;
