import React, { Component } from "react";

class Characters extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => this.setState({ data: characters }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2>
          Render props 01:<small className="text-muted"> Starting Point</small>
        </h2>
        <br />
        <div>
          {Boolean(data.length) &&
            data.map(({ id, name, culture, isFemale }) => (
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

export default Characters;
