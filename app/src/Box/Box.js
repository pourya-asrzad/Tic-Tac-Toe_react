import React, { useState } from "react";
import Circle from "../Circle/Circle";
import styles from "./Box.module.css";
import Cross from "../Cross/Cross";
const Box = (props) => {
  function cellClickHandler(event) {
    props.onGetId(event.target.id);
    props.setShape((prev) => prev + 1);
    if (props.getShape % 2 == 0) {
      props.addShape(props.firstType);
    } else {
      props.addShape((prev) => (prev == "X" ? "O" : "X"));
    }
  }
  let Shapecopy;
  if (props.shape == "X") {
    Shapecopy = <Cross />;
  } else if (props.shape == "O") {
    Shapecopy = <Circle />;
  }

  return (
    <div
      id={props.id}
      onClick={(event) => {
        cellClickHandler(event);
      }}
      className={props.theme ? styles.Boxtheme : styles.Box}
    >
      {Shapecopy}
    </div>
  );
};

export default Box;
