import React from "react";
import withData from "./withData";

const HoCStarWarsCharacters3 = ({ data }) => (
  <div>
    <h2 className="is-size-4">Higher-order components</h2>
    <h3 className="is-size-5">03: withData configurable HOC</h3>
    <br />
    <ul>
      {Boolean(data.length) &&
        data.map(({ name, gender }) => (
          <div key={name}>
            <h3 className="is-size-5">{name}</h3>
            <p>gender: {gender}</p>
          </div>
        ))}
    </ul>
  </div>
);

const options = {
  url: "https://swapi.co/api/people/",
  format: "json",
  dataPath: "results"
};

export default withData(options)(HoCStarWarsCharacters3);
