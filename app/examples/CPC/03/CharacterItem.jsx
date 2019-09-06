import React from "react";

const CharacterItem = ({ name, culture, isFemale }) => (
  <div className="card m-b">
    <div className="card-header">{name}</div>
    <div className="card-body">
      <p className="card-text">
        {culture} / {isFemale ? "female" : "male"}
      </p>
    </div>
  </div>
);

export default CharacterItem;
