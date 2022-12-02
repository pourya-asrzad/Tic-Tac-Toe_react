import React, { useState, useReducer } from "react";
import Form from "../Form/form";
import UserSubmition from "../UserSubmition/UserSubmition";

function userinfo1reducer(state, action) {
  return {
    type: action.type,
    userName: action.userName,
  };
}
function userinfo2reducer(state, action) {
  return {
    type: action.type,
    userName: action.userName,
  };
}
const FormContainer = (props) => {
  const [Playerinfo1, setPlayerinfo1] = useReducer(userinfo1reducer, {
    userName: false,
    type: false,
  });
  const [Playerinfo2, setPlayerinfo2] = useReducer(userinfo2reducer, {
    userName: false,
    type: false,
  });
  function setuserdata(name, type) {
    setPlayerinfo1({ type: type ? "X" : "O", userName: name });
  }
  function setuserdata2(name, type) {
    setPlayerinfo2({
      type: Playerinfo1.type == "O" ? "X" : "O",
      userName: name,
    });
  }
  const secondType = Playerinfo1.type == "O" ? "X" : "O";
  if (Playerinfo2.type && Playerinfo2.userName) {
    props.getVaild(true);
  }
  props.getFirstType(
    Playerinfo1.type,
    Playerinfo1.userName,
    Playerinfo2.userName,
    Playerinfo2.type
  );
  return (
    <div className="formcontainer">
      {Playerinfo2.type && Playerinfo2.userName ? (
        <UserSubmition
          theme={props.theme}
          username={Playerinfo2.userName}
          type={Playerinfo2.type}
        />
      ) : (
        <Form
          theme={props.theme}
          disable={Playerinfo1.type && Playerinfo1.userName ? false : "disable"}
          setuserdata={setuserdata2}
          classname="button-12"
          user2={true}
          secondUser={secondType}
        />
      )}
      {Playerinfo1.type && Playerinfo1.userName ? (
        <UserSubmition
          theme={props.theme}
          username={Playerinfo1.userName}
          type={Playerinfo1.type}
        />
      ) : (
        <Form
          theme={props.theme}
          setuserdata={setuserdata}
          classname="button-33"
        />
      )}
    </div>
  );
};

export default FormContainer;
