import React, { useContext } from "react";
import GameProvider, { GameContext } from "./providers/GameProvider";
import Character from "./components/Character";
import Map from "./components/Map";
import "./App.css";

function Background() {
  const { translate } = useContext(GameContext);
  return (
    <div
      id="background"
      style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }}
    ></div>
  );
}

function App() {
  return (
    <GameProvider>
      <Map />
      <Character />
    </GameProvider>
  );
}

export default App;
