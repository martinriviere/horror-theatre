import React, { useContext } from "react";
import "./Theatre.css";
import { GameContext } from "../providers/GameProvider";

function Theatre({ movie }) {
  const { closeTheatre } = useContext(GameContext);
  return (
    <div id="bgd">
      <div id="screen">
        <img src={movie.posterUrl} style={{ width: "20%" }}></img>
        <p>{movie.title.replace("_", " ")}</p>
        <div>
          <button>Play</button>
          <button onClick={closeTheatre}>Retour</button>
        </div>
      </div>
    </div>
  );
}

export default Theatre;
