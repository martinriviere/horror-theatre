import React, { useContext } from "react";
import Theatre from "./Theatre";
import Character from "./Character";
import Map from "./Map";
import "../App.css";
import { GameContext } from "../providers/GameProvider";
import FightScreen from "./FightScreen"

function Game() {
  const { displayTheatre, displayFight } = useContext(GameContext);
  return (
    <>
      <Map />
      <Character />
      {displayTheatre && <Theatre />}
      {displayFight && <FightScreen />}
    </>
  );
}

export default Game;
