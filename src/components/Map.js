import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import Room from "./Room";
import "./map.css";
import corridor from "../images/corridor.jpg";
import { randomOf } from "./helpers";

function CreateArrays() {
  const x = 9; // Nb d'éléments en hauteur
  const y = 9; // Nb d'éléments en largeur
  const roomSize = 300; // hauteur / largeur d'une salle
  const corridorSize = 100; // hauteur / largeur d'un couloir

  const modulo = 6 * roomSize + 3 * corridorSize; // NE PAS MODIIFIER
  let posX = 0;
  let posY = 0;

  const arrays = [];
  for (let r = 0; r < x; r++) {
    // row
    let roomStyleX = "";
    let roomStyleY = "";
    if (TestRoom(r)) {
      roomStyleX = { top: `${posX}px`, height: `${roomSize}px` };
      posX += roomSize;
    } else {
      roomStyleX = "";
      posX += corridorSize;
    }
    for (let c = 0; c < y; c++) {
      // column
      if (TestRoom(c)) {
        roomStyleY = { left: `${posY % modulo}px`, width: `${roomSize}px` };
        posY += roomSize;
      } else {
        roomStyleY = "";
        posY += corridorSize;
      }
      if (roomStyleX !== "" && roomStyleY !== "")
        arrays.push({ ...roomStyleX, ...roomStyleY });
    }
  }
  posX = 0;
  posY = 0;
  return arrays;
}

function TestRoom(x) {
  let isRoom = true;
  switch (x) {
    case 1:
      isRoom = false;
      break;
    case 4:
      isRoom = false;
      break;
    case 7:
      isRoom = false;
      break;
    default:
      break;
  }
  return isRoom;
}

function Map() {
  const { translate, getRooms, rooms } = useContext(GameContext);
  getRooms(
    CreateArrays().map((room, id) => {
      const tempRoom = {
        ...room,
        type: ["Cinéma", "Combat"][randomOf(2)],
        id: id
      };
      return tempRoom;
    })
  );
  return (
    <div style={{ 
      transform: `translate(${translate.x}px, ${translate.y}px)`, 
      backgroundImage: `url(${corridor})`, 
      height: `2200px`, 
      width: `2200px` 
      }}
    >
      {rooms &&
        rooms.map(room => <Room style={room} key={room.id} id={room.id} />)}
    </div>
  );
}

export default Map;
