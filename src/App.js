import React from "react";
import GameProvider from "./providers/GameProvider";
import Theatre from "./components/Theatre";

function App() {
  return (
    <GameProvider>
      <Theatre />
    </GameProvider>
  );
}

export default App;
