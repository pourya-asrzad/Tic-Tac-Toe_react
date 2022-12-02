import "./App.css";
import FormContainer from "./FormContainer/FormContainer";
import Main from "./Main/Main";
import { useState } from "react";
import Modal from "./Modal/Modal";
import Timer from "./Timer/Timer";
import Themebtn from "./Themebtn/Themebtn";
function App() {
  const [winnerName, setWinnerName] = useState(false);
  const [firsttype, setFirstType] = useState(" ");
  const [getGame, setGame] = useState(false);
  const [minuteToModal, setMinutetoModa] = useState(0);
  const [secondeToModal, setSeconeToModal] = useState(0);
  const [tuggle, settheme] = useState(false);
  let userName = [];
  function getFirstType(type, user1, user2, type2) {
    setFirstType(type);
    userName.push({ name: user1, type: type });
    userName.push({ name: user2, type: type2 });
  }
  function getVaildHandler(ok) {
    setGame(ok);
  }
  function onGetWinner(winnerName) {
    setWinnerName(winnerName);
  }

  function onGetTime(time, minute) {
    setMinutetoModa(minute);
    setSeconeToModal(time);
  }
  function onGetTheme(theme) {
    settheme(theme);
    tuggle
      ? (document.querySelector("body").style.background = "#222222")
      : (document.querySelector("body").style.background = "white");
  }

  return (
    <div className="App">
      <FormContainer
        theme={tuggle}
        getVaild={getVaildHandler}
        getFirstType={getFirstType}
      />
      {getGame ? (
        <Main
          theme={tuggle}
          onGetWinner={onGetWinner}
          userNames={userName}
          firstType={firsttype}
        />
      ) : (
        ""
      )}
      <Modal
        theme={tuggle}
        txt={winnerName}
        minute={minuteToModal}
        second={secondeToModal}
      />
      {getGame ? (
        <Timer theme={tuggle} onGetTime={onGetTime} stopper={winnerName} />
      ) : (
        ""
      )}
      <Themebtn theme={tuggle} onGetTheme={onGetTheme} />
    </div>
  );
}

export default App;
