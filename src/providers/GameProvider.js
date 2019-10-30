import React, { Component } from "react";

export const GameContext = React.createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterPosition: { top: 0, left: 0, rotate: 0 },
      translate: { x: 0, y: 0 },
      getComputedStyle: this.getComputedStyle
    };
    window.addEventListener("keydown", this.handleKeyDown);
  }

  getComputedStyle = (top, left) => {
    this.computedCharacterPosition = { top: top, left: left };
  };

  handleKeyDown = event => {
    event.preventDefault();
    const { characterPosition, translate } = this.state;
    const step = 10;
    switch (event.keyCode) {
      case 37:
        if (this.computedCharacterPosition.left > window.innerWidth * 0.15) {
          this.setState({
            characterPosition: {
              ...characterPosition,
              left: characterPosition.left - step,
              rotate: -90
            }
          });
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: -90 },
            translate: { ...translate, x: translate.x + step }
          });
        }
        break;
      case 38:
        if (this.computedCharacterPosition.top > window.innerHeight * 0.2) {
          this.setState({
            characterPosition: {
              ...characterPosition,
              top: characterPosition.top - step,
              rotate: 0
            }
          });
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: 0 },
            translate: { ...translate, y: translate.y + step }
          });
        }
        break;
      case 39:
        if (this.computedCharacterPosition.left < window.innerWidth * 0.85) {
          this.setState({
            characterPosition: {
              ...characterPosition,
              left: characterPosition.left + step,
              rotate: 90
            }
          });
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: 90 },
            translate: { ...translate, x: translate.x - step }
          });
        }
        break;
      case 40:
        if (this.computedCharacterPosition.top < window.innerHeight * 0.8) {
          this.setState({
            characterPosition: {
              ...characterPosition,
              top: characterPosition.top + step,
              rotate: 180
            }
          });
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: 180 },
            translate: { ...translate, y: translate.y - step }
          });
        }
        break;
      default:
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
