import React from "react";
import withData from "./withData";
import withLoader from "./withLoader";

const HoCStarWarsCharacters4 = ({ data, isLoading }) => (
  <div>
    <h2 className="is-size-4">Higher-order components</h2>
    <h3 className="is-size-5">04: HοC composition (withData and withLoader)</h3>
    <br />
    <ul>
      {!isLoading &&
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

// Order matters
export default withData(options)(withLoader(HoCStarWarsCharacters4));
