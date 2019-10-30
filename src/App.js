import React from "react";
import GameProvider from "./providers/GameProvider";
import Character from "./components/Character";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <Map />
      <Character />
    </GameProvider>
  );
}

export default App;
