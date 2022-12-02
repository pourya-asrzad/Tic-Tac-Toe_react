import React from "react";

const UserSubmition = (props) => {
  return (
    <div className="usersubmitiontext">
      <h2 className={props.theme ? "colorblack" : ""}>
        {props.username} :{" "}
        <span className={props.type == "O" ? "redc" : "bluec"}>
          {" "}
          {props.type}
        </span>
      </h2>
    </div>
  );
};

export default UserSubmition;
