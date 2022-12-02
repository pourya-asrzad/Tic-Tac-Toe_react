import React from "react";

const Input = (props) => {
  function setinputvalu(event) {
    props.onGetData(event.target.value);
  }
  console.log(props.theme);
  return (
    <div>
      <label className={props.theme ? " colorblack" : "white"} htmlFor="uniqe">
        {props.txt}
      </label>
      <br />
      <input
        disabled={props.disable}
        onChange={setinputvalu}
        id="uniqe"
        name="uniqe"
        type="text"
      />
    </div>
  );
};

export default Input;
