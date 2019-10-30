import React, { useContext } from "react";
import CharacterImg from "../images/character.png";
import { GameContext } from "../providers/GameProvider";

function Character() {
  const { characterPosition } = useContext(GameContext);

  const style = {
    position: "absolute",
    width: 60,
    marginLeft: -30,
    marginTop: -21.1
  };

  return (
    <img
      src={CharacterImg}
      style={{
        ...style,
        left: characterPosition.left + "%",
        top: characterPosition.top + "%",
        transform: `rotate(${characterPosition.rotate}deg)`
      }}
      alt="Personnage"
    />
  );
}

export default Character;
