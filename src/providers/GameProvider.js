import React, { Component } from "react";

export const GameContext = React.createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterPosition: { top: 0, left: 0, rotate: 0 },
      translate: { x: 0, y: 0 },
      getComputedStyle: this.getComputedStyle,
      virtualPosition: {
        top: window.innerHeight / 2 - 21.1,
        left: window.innerWidth / 2 - 30
      }
    };
    window.addEventListener("keydown", this.handleKeyDown);
  }

  getComputedStyle = (top, left) => {
    this.computedCharacterPosition = { top: top, left: left };
  };

  doesCharacterCollide = (x1, x2, y1, y2) => {
    const { virtualPosition } = this.state;
    const top = virtualPosition.top;
    const left = virtualPosition.left;
    if (left + 30 >= x1 && left <= x2 && (top + 21.1 >= y1 && top <= y2))
      return true;
    else return false;
  };

  handleKeyDown = event => {
    // event.preventDefault();
    const { characterPosition, translate, virtualPosition } = this.state;
    const step = 10;
    switch (event.keyCode) {
      case 37:
        if (
          this.computedCharacterPosition.left > window.innerWidth * 0.15 ||
          virtualPosition.left < window.innerWidth * 0.15
        ) {
          if (virtualPosition.left > 0) {
            this.setState({
              characterPosition: {
                ...characterPosition,
                left: characterPosition.left - step,
                rotate: -90
              },
              virtualPosition: {
                ...virtualPosition,
                left: virtualPosition.left - step
              }
            });
          }
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: -90 },
            translate: { ...translate, x: translate.x + step },
            virtualPosition: {
              ...virtualPosition,
              left: virtualPosition.left - step
            }
          });
        }
        break;
      case 38:
        if (
          this.computedCharacterPosition.top > window.innerHeight * 0.2 ||
          virtualPosition.top < window.innerHeight * 0.2
        ) {
          if (virtualPosition.top > 0) {
            this.setState({
              characterPosition: {
                ...characterPosition,
                top: characterPosition.top - step,
                rotate: 0
              },
              virtualPosition: {
                ...virtualPosition,
                top: virtualPosition.top - step
              }
            });
          }
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: 0 },
            translate: { ...translate, y: translate.y + step },
            virtualPosition: {
              ...virtualPosition,
              top: virtualPosition.top - step
            }
          });
        }
        break;
      case 39:
        if (
          this.computedCharacterPosition.left < window.innerWidth * 0.85 ||
          virtualPosition.left > 2100 - window.innerWidth * 0.15 - 30
        ) {
          if (virtualPosition.left < 2100 - 30) {
            this.setState({
              characterPosition: {
                ...characterPosition,
                left: characterPosition.left + step,
                rotate: 90
              },
              virtualPosition: {
                ...virtualPosition,
                left: virtualPosition.left + step
              }
            });
          }
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: 90 },
            translate: { ...translate, x: translate.x - step },
            virtualPosition: {
              ...virtualPosition,
              left: virtualPosition.left + step
            }
          });
        }
        break;
      case 40:
        if (
          this.computedCharacterPosition.top < window.innerHeight * 0.8 ||
          virtualPosition.top > 2100 - window.innerHeight * 0.2 - 21.1
        ) {
          if (virtualPosition.top < 2100 - 21.1) {
            this.setState({
              characterPosition: {
                ...characterPosition,
                top: characterPosition.top + step,
                rotate: 180
              },
              virtualPosition: {
                ...virtualPosition,
                top: virtualPosition.top + step
              }
            });
          }
        } else {
          this.setState({
            characterPosition: { ...characterPosition, rotate: 180 },
            translate: { ...translate, y: translate.y - step },
            virtualPosition: {
              ...virtualPosition,
              top: virtualPosition.top + step
            }
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
