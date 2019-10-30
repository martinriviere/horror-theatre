import React, { Component } from "react";

export const GameContext = React.createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterPosition: { top: 50, left: 50, rotate: 0 }
    };
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { characterPosition } = this.state;
    const step = 2;
    switch (event.keyCode) {
      case 37:
        this.setState({
          characterPosition: {
            ...characterPosition,
            left: characterPosition.left - step,
            rotate: -90
          }
        });
        break;
      case 38:
        this.setState({
          characterPosition: {
            ...characterPosition,
            top: characterPosition.top - step,
            rotate: 0
          }
        });
        break;
      case 39:
        this.setState({
          characterPosition: {
            ...characterPosition,
            left: characterPosition.left + step,
            rotate: 90
          }
        });
        break;
      case 40:
        this.setState({
          characterPosition: {
            ...characterPosition,
            top: characterPosition.top + step,
            rotate: 180
          }
        });
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
