import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const [second, setSecond] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [saveTime, setSaveTime] = useState(0);
  const [saveTimeM, setSaveTimeM] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (props.stopper) {
        return;
      }
      setSecond(second + 1);
      let minutecopy = 0;
      if (second === 59) {
        minutecopy = minutecopy + minute + 1;
        setMinutes(minute + 1);
        setSaveTimeM((prev) => (prev = minutecopy));
        setSecond(0);
      }
      let secondcopy = 0;
      if (!props.stopper) {
        secondcopy = secondcopy + second + 1;
        setSaveTime((prev) => (prev = secondcopy));
      }
      if (!props.stopper) {
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  function stoptime() {}
  if (props.stopper) {
    props.onGetTime(saveTime, saveTimeM);
  }
  return (
    <div className="Timer">
      <img src="images/clock.png"></img>

      <h2 className={props.theme ? "colorblack" : ""}>
        {minute < 10 ? "0" + minute : minute}:
        {second < 10 ? "0" + second : second}
      </h2>
    </div>
  );
};

export default Timer;
