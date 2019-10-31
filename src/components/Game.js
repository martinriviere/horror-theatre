import React, { useContext } from "react";
import Theatre from "./Theatre";
import Character from "./Character";
import Map from "./Map";
import "../App.css";
import { GameContext } from "../providers/GameProvider";

function Game() {
  const { displayTheatre } = useContext(GameContext);
  return (
    <>
      <Map />
      <Character />
      {displayTheatre && <Theatre />}
    </>
  );
}

export default Game;
