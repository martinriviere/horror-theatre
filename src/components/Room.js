import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import { randomOf } from "./helpers";

function Room(props) {
  const { addRoomToList, roomsList } = useContext(GameContext);
  const type = ["Cinéma", "Combat"][randomOf(2)];
  // props.isRoom && addRoomToList(type);
  return (
    <div style={props.style} className="test">
      {/* {props.isRoom && roomsList[0]} */}
    </div>
  );
}

export default Room;
