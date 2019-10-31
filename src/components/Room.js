import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import { randomOf } from "./helpers";

function Room(props) {
  const { rooms } = useContext(GameContext);
  return (
    <div style={props.style} className="test">
      {rooms && rooms[props.id].type}
    </div>
  );
}

export default Room;
