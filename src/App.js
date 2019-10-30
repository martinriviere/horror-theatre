import React from "react";
import GameProvider from "./providers/GameProvider";
import FightScreen from "./components/FightScreen";

function App() {
  return <GameProvider>
    <FightScreen/>
  </GameProvider>;
}

export default App;
