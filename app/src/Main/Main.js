import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import styles from "./Main.module.css";
const Main = (props) => {
  const dataArr = [
    { id: 1, shape: "", location: "" },
    { id: 2, shape: "", location: "" },
    { id: 3, shape: "", location: "" },
    { id: 4, shape: "", location: "" },
    { id: 5, shape: "", location: "" },
    { id: 6, shape: "", location: "" },
    { id: 7, shape: "", location: "" },
    { id: 8, shape: "", location: "" },
    { id: 9, shape: "", location: "" },
  ];
  const [first, setfirst] = useState(0);
  const [data, setData] = useState(dataArr);
  const [Shapemode, setShapemode] = useState("");

  function GetIdHandler(id) {
    setData((prev) => {
      prev.map((element) => {
        if (element.id == id) {
          element.shape = Shapemode;
          element.location = id;
        }
      });
      return prev;
    });
  }
  let getLocationUser1 = [];
  let getLocationUser2 = [];
  if (first > 5) {
    const filterForuser1 = data.filter((element) => {
      return element.shape == "O";
    });
    const filterForuser2 = data.filter((element) => {
      return element.shape == "X";
    });
    filterForuser1.map((element) => {
      getLocationUser1.push(element.location);
    });
    filterForuser2.map((element) => {
      getLocationUser2.push(element.location);
    });
    const winningStates = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["7", "5", "3"],
      ["1", "5", "9"],
    ];

    winningStates.forEach((winningState) => {
      const xWins = winningState.every((state) =>
        getLocationUser2.includes(state)
      );
      const oWins = winningState.every((state) =>
        getLocationUser1.includes(state)
      );
      const filterX = props.userNames.filter((elemen) => {
        return elemen.type == "X";
      });
      const filterO = props.userNames.filter((elemen) => {
        return elemen.type == "O";
      });

      if (xWins || oWins) {
        xWins
          ? props.onGetWinner(filterX[1].name)
          : props.onGetWinner(filterO[1].name);
      }
    });
  }
  return (
    <div className={props.theme ? styles.Mainlight : styles.Main}>
      {data.map((element) => {
        return (
          <Box
            theme={props.theme}
            id={element.id}
            key={element.id}
            shape={element.shape}
            onGetId={GetIdHandler}
            addShape={setShapemode}
            firstType={props.firstType}
            getShape={first}
            setShape={setfirst}
          ></Box>
        );
      })}
    </div>
  );
};

export default Main;
