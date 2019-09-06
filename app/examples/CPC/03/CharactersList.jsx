import React from "react";
import CharacterItem from "./CharacterItem";

const CharactersList = ({ characters }) => (
  <div>
    <h2>
      Presentational and Container components 03:
      <small className="text-muted">
        {" "}
        Container component with presentational component children
      </small>
    </h2>
    <br />
    <div>
      {characters.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </div>
  </div>
);

export default CharactersList;
