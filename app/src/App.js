import "./App.css";
import FormContainer from "./FormContainer/FormContainer";
import Main from "./Main/Main";
import { useState } from "react";
function App() {
  const [firsttype, setFirstType] = useState(" ");
  const [getGame, setGame] = useState(false);
  function getFirstType(type) {
    setFirstType(type);
  }
  function getVaildHandler(ok) {
    setGame(ok);
  }
  return (
    <div className="App">
      <FormContainer getVaild={getVaildHandler} getFirstType={getFirstType} />
      {getGame ? <Main firstType={firsttype} /> : ""}
    </div>
  );
}

export default App;
