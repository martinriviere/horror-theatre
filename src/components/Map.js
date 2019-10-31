import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import Room from "./Room";
import "./map.css";

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
      roomStyleX = {
        top: `${posX}px`,
        height: `${corridorSize}px`,
        backgroundColor: `#eee`
      };
      posX += corridorSize;
    }
    for (let c = 0; c < y; c++) {
      // column
      if (TestRoom(c)) {
        roomStyleY = { left: `${posY % modulo}px`, width: `${roomSize}px` };
        posY += roomSize;
      } else {
        roomStyleY = {
          left: `${posY % modulo}px`,
          width: `${corridorSize}px`,
          backgroundColor: `#eee`
        };
        posY += corridorSize;
      }
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
  const { translate, getRooms } = useContext(GameContext);
  getRooms(CreateArrays());
  return (
    <div style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }}>
      {CreateArrays().map((item, i) => (
        <Room
          style={item}
          key={i}
          isRoom={
            item.height === "300px" && item.width === "300px" ? true : false
          }
        />
      ))}
    </div>
  );
}

export default Map;
