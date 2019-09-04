import React from "react";
import useStarWarsCharacters from "./useStarWarsCharacters";
import Loader from "./Loader";

export default function CustomHook() {
  const settings = {
    url: "https://swapi.co/api/people/",
    format: "json",
    dataPath: "results"
  };
  const { data, isLoading } = useStarWarsCharacters(settings);

  return (
    <div>
      <h2>
        Hooks 04:<small className="text-muted"> Custom hook</small>
      </h2>
      <br />
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          data.map(({ name, gender }) => (
            <div key={name}>
              <h3 className="is-size-5">{name}</h3>
              <p>gender: {gender}</p>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
