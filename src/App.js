import React from "react";
import GameProvider from "./providers/GameProvider";
import Character from "./components/Character";

function App() {
  return (
    <GameProvider>
      <Character />
    </GameProvider>
  );
}

export default App;
