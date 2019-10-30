import React, { useContext, createRef, useEffect } from "react";
import CharacterImg from "../images/character.png";
import { GameContext } from "../providers/GameProvider";
import { getValueFromString } from "./helpers";

function Character() {
  const { characterPosition, getComputedStyle } = useContext(GameContext);
  const img = createRef();

  const style = {
    position: "absolute",
    width: 60,
    marginLeft: -30,
    marginTop: -21.1
  };

  useEffect(() => {
    const top = getValueFromString(window.getComputedStyle(img.current).top, 2);
    const left = getValueFromString(
      window.getComputedStyle(img.current).left,
      2
    );
    getComputedStyle(top, left);
  });

  return (
    <img
      src={CharacterImg}
      style={{
        ...style,
        left: `calc(50vw + ${characterPosition.left}px)`,
        top: `calc(50vh + ${characterPosition.top}px)`,
        transform: `rotate(${characterPosition.rotate}deg)`
      }}
      alt="Personnage"
      ref={img}
    />
  );
}

export default Character;
