import React, { useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
const Form = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState(false);
  const [type, setType] = useState(false);
  function formSubmitHandler(event) {
    event.preventDefault();
    if (isValid) {
      props.setuserdata(name, type);
    }
  }

  function getData(value) {
    if (props.user1) {
      if (value == props.user1) {
        return;
      }
    }
    setIsValid(value.length > 4);
    setName(value);
  }
  function onChangeSelect(value) {
    setType(value);
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="inputselect">
          <Input
            theme={props.theme}
            onGetData={getData}
            txt="Enter your name :"
            disable={props.disable}
          ></Input>
          {/* <h4>O</h4> */}
          {props.user2 ? (
            <h4 className={props.theme ? "colorblack" : ""}>
              {props.secondUser}
            </h4>
          ) : (
            <Select onChangeSelect={onChangeSelect} disable={props.disable} />
          )}
        </div>
        <button
          className={`${props.classname} ${props.disable} ${
            isValid ? " " : "disable"
          }`}
          role="button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
