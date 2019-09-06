import React, { Component } from "react";

class CharactersList extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => this.setState({ characters }));
  }

  render() {
    return (
      <div>
        <h2>
          Presentational and Container components 01:
          <small className="text-muted"> Starting Point</small>
        </h2>
        <br />
        <div>
          {this.state.characters.map(({ id, name, culture, isFemale }) => (
            <div className="card m-b" key={id}>
              <div className="card-header">{name}</div>
              <div className="card-body">
                <p className="card-text">
                  {culture} / {isFemale ? "female" : "male"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CharactersList;
