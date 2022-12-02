import React from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  function playagain() {
    window.location.reload();
  }
  return props.txt
    ? ReactDOM.createPortal(
        <div className="mofdalghost">
          <div className="Modal">
            <h1>
              {props.txt} <span className="wintxt">Win!</span>
            </h1>
            <h2>
              {props.minute < 10 ? "0" + props.minute : props.minute}:
              {props.second < 10 ? "0" + props.second : props.second}
            </h2>
            <button onClick={playagain}>Play again</button>
          </div>
        </div>,
        document.body
      )
    : "";
};

export default Modal;
