import React from "react";

const CharactersList = ({ characters }) => (
  <div>
    <h2>
      Presentational and Container components 02:
      <small className="text-muted"> Container component with presentational component child</small>
    </h2>
    <br />
    <div>
      {characters.map(({ id, name, culture, isFemale }) => (
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

export default CharactersList;
