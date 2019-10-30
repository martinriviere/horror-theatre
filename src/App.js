import React from "react";
import GameProvider from "./providers/GameProvider";
import Map from "./components/Map"

function App() {
  return (
  <GameProvider>
    <Map />
  </GameProvider>
  );
}

export default App;
