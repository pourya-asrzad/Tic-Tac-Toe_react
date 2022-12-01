import React from "react";

const UserSubmition = (props) => {
  return (
    <div className="usersubmitiontext">
      <h2>{props.username + " : " + props.type}</h2>
    </div>
  );
};

export default UserSubmition;
