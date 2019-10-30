import React, { Component } from "react";

export const GameContext = React.createContext();

class GameProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameProvider;
