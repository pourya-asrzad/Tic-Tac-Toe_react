import React, { useState } from "react";

const Themebtn = (props) => {
  function changeThemeHandler() {
    props.theme ? props.onGetTheme(false) : props.onGetTheme(true);
  }
  return (
    <div className="Themebtn">
      <button onClick={changeThemeHandler}>
        <img
          width="20"
          src={props.theme ? "/images/sun.png" : "/images/moon.png"}
        ></img>
      </button>
    </div>
  );
};

export default Themebtn;
