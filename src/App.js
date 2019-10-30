import React, { useContext } from "react";
import GameProvider, { GameContext } from "./providers/GameProvider";
import Character from "./components/Character";
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
      <Background />
      <Character />
    </GameProvider>
  );
}

export default App;
