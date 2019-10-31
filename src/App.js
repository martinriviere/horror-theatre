import React from "react";
import GameProvider from "./providers/GameProvider";
import FightScreen from "./components/FightScreen";
import Theatre from "./components/Theatre";
import Character from "./components/Character";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <GameProvider>
      {/* <FightScreen/> */}
      {null && <Theatre />}
      <Map />
      <Character />
    </GameProvider>
    
  );
}

export default App;
