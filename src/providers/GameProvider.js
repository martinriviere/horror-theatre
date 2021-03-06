import React, { Component } from "react";
import { getValueFromString } from "../components/helpers";
import CharacterUp from "../images/characterUp.png";
import CharacterRight from "../images/characterRight.png";
import CharacterDown from "../images/characterDown.png";
import CharacterLeft from "../images/characterLeft.png";

export const GameContext = React.createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterPosition: { top: 0, left: 0 },
      translate: { x: 0, y: 0 },
      getComputedStyle: this.getComputedStyle,
      virtualPosition: {
        top: 350,
        left: window.innerWidth / 2
      },
      getRooms: this.getRooms,
      image: CharacterUp,
      rooms: null,
      displayTheatre: false,
      movie: null,
      closeTheatre: this.closeTheatre
      displayFight: false
    };
    window.addEventListener("keydown", this.handleKeyDown);
    this.numberOfRooms = null;
    this.isRoomsListDefined = false;
  }

  getRooms = array => {
    if (!this.isRoomsListDefined) this.setState({ rooms: array });
    this.isRoomsListDefined = true;
  };

  getComputedStyle = (top, left, width, height) => {
    this.computedCharacterPosition = {
      top: top,
      left: left,
      width: width,
      height: height
    };
  };

  doesCharacterCollide = (x1, x2, y1, y2, nextTop, nextLeft) => {
    if (
      nextLeft + this.computedCharacterPosition.width >= x1 &&
      nextLeft <= x2 &&
      (nextTop + this.computedCharacterPosition.height >= y1 && nextTop <= y2)
    )
      return true;
    else return false;
  };

  checkCollision = (step, keyCode) => {
    const { virtualPosition } = this.state;
    const virtualTop = virtualPosition.top;
    const virtualLeft = virtualPosition.left;
    const checkRoom = this.state.rooms.find(room => {
      const height = getValueFromString(room.height, 2);
      const width = getValueFromString(room.width, 2);
      const left = getValueFromString(room.left, 2);
      const top = getValueFromString(room.top, 2);
      return this.doesCharacterCollide(
        left,
        left + width,
        top,
        top + height,
        virtualTop + step,
        virtualLeft + step
      );
    });
    if (
      checkRoom &&
      ((virtualLeft >= getValueFromString(checkRoom.left, 2) + 100 &&
        virtualLeft + this.computedCharacterPosition.width <=
          getValueFromString(checkRoom.left, 2) + 200 &&
        (this.keyCode === 38 || this.keyCode === 40)) ||
        (virtualTop >= getValueFromString(checkRoom.top, 2) + 100 &&
          virtualTop + this.computedCharacterPosition.height <=
            getValueFromString(checkRoom.top, 2) + 200 &&
          (this.keyCode === 37 || this.keyCode === 39)))
    )
      if (checkRoom.type === "Cinéma") this.setState({ displayTheatre: true, movie: checkRoom.movie });
      else if (checkRoom.type === "Combat") this.setState({ displayFight: true });
    return checkRoom;
  };

  closeTheatre = () => {
    this.setState({ displayTheatre: false });
  };

  handleKeyDown = event => {
    console.log(this.state.rooms);
    // event.preventDefault();
    this.keyCode = event.keyCode;
    const step = 10;
    if ([37, 38, 39, 40].includes(this.keyCode)) {
      const { characterPosition, translate, virtualPosition } = this.state;
      switch (this.keyCode) {
        case 37:
          if (!this.checkCollision(-step)) {
            if (
              this.computedCharacterPosition.left > window.innerWidth * 0.15 ||
              virtualPosition.left < window.innerWidth * 0.15
            ) {
              // console.log(this.checkCollision(-step));
              if (virtualPosition.left > 0) {
                this.setState({
                  characterPosition: {
                    ...characterPosition,
                    left: characterPosition.left - step
                  },
                  virtualPosition: {
                    ...virtualPosition,
                    left: virtualPosition.left - step
                  }
                });
                if (!this.checkCollision(step))
                  this.setState({ image: CharacterLeft });
              }
            } else {
              this.setState({
                characterPosition: { ...characterPosition },
                translate: { ...translate, x: translate.x + step },
                virtualPosition: {
                  ...virtualPosition,
                  left: virtualPosition.left - step
                },
                image: CharacterLeft
              });
            }
          }
          break;
        case 38:
          if (!this.checkCollision(-step)) {
            if (
              this.computedCharacterPosition.top > window.innerHeight * 0.2 ||
              virtualPosition.top < window.innerHeight * 0.2
            ) {
              if (virtualPosition.top > 0) {
                this.setState({
                  characterPosition: {
                    ...characterPosition,
                    top: characterPosition.top - step
                  },
                  virtualPosition: {
                    ...virtualPosition,
                    top: virtualPosition.top - step
                  }
                });
                if (!this.checkCollision(step))
                  this.setState({ image: CharacterUp });
              }
            } else {
              this.setState({
                characterPosition: { ...characterPosition },
                translate: { ...translate, y: translate.y + step },
                virtualPosition: {
                  ...virtualPosition,
                  top: virtualPosition.top - step
                },
                image: CharacterUp
              });
            }
          }
          break;
        case 39:
          if (!this.checkCollision(step)) {
            if (
              this.computedCharacterPosition.left < window.innerWidth * 0.85 ||
              virtualPosition.left >
                2100 -
                  window.innerWidth * 0.15 -
                  this.computedCharacterPosition.width
            ) {
              if (
                virtualPosition.left <
                2100 - this.computedCharacterPosition.width
              ) {
                this.setState({
                  characterPosition: {
                    ...characterPosition,
                    left: characterPosition.left + step
                  },
                  virtualPosition: {
                    ...virtualPosition,
                    left: virtualPosition.left + step
                  }
                });
                if (!this.checkCollision(-step))
                  this.setState({ image: CharacterRight });
              }
            } else {
              this.setState({
                characterPosition: { ...characterPosition },
                translate: { ...translate, x: translate.x - step },
                virtualPosition: {
                  ...virtualPosition,
                  left: virtualPosition.left + step
                },
                image: CharacterRight
              });
            }
          }
          break;
        case 40:
          if (!this.checkCollision(step)) {
            if (
              this.computedCharacterPosition.top < window.innerHeight * 0.8 ||
              virtualPosition.top >
                2100 -
                  window.innerHeight * 0.2 -
                  this.computedCharacterPosition.height
            ) {
              if (
                virtualPosition.top <
                2100 - this.computedCharacterPosition.height
              ) {
                this.setState({
                  characterPosition: {
                    ...characterPosition,
                    top: characterPosition.top + step
                  },
                  virtualPosition: {
                    ...virtualPosition,
                    top: virtualPosition.top + step
                  }
                });
                if (!this.checkCollision(-step))
                  this.setState({ image: CharacterDown });
              }
            } else {
              this.setState({
                characterPosition: { ...characterPosition },
                translate: { ...translate, y: translate.y - step },
                virtualPosition: {
                  ...virtualPosition,
                  top: virtualPosition.top + step
                },
                image: CharacterDown
              });
            }
          }
          break;
        default:
      }
    }
  };

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameProvider;
