import React, { Component } from "react";
import CharactersList from "./CharactersList";

class CharactersListContainer extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => this.setState({ characters }));
  }

  render() {
    return <CharactersList characters={this.state.characters} />;
  }
}

export default CharactersListContainer;
