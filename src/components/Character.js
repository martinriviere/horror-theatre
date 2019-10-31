import React, { useContext, createRef, useEffect } from "react";
import { GameContext } from "../providers/GameProvider";
import { getValueFromString } from "./helpers";

function Character() {
  const { characterPosition, getComputedStyle, image } = useContext(
    GameContext
  );
  const img = createRef();

  const style = {
    position: "absolute"
    // width: "50%"
    // marginLeft: -30,
    // marginTop: -21.1
  };

  useEffect(() => {
    const top = getValueFromString(window.getComputedStyle(img.current).top, 2);
    const left = getValueFromString(
      window.getComputedStyle(img.current).left,
      2
    );
    const width = getValueFromString(
      window.getComputedStyle(img.current).width,
      2
    );
    const height = getValueFromString(
      window.getComputedStyle(img.current).height,
      2
    );
    getComputedStyle(top, left, width, height);
  });

  return (
    <img
      src={image}
      style={{
        ...style,
        left: `calc(50vw + ${characterPosition.left}px)`,
        top: `calc(350px + ${characterPosition.top}px)`
      }}
      alt="Personnage"
      ref={img}
    />
  );
}

export default Character;
