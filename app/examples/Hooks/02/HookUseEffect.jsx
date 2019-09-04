import React, { useState, useEffect } from "react";

export default function HookUseEffect() {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://swapi.co/api/people/?format=json")
      .then(res => res.json())
      .then(res => {
        setStarWarsCharacters(res.results);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>
        Hooks 02:<small className="text-muted"> useEffect()</small>
      </h2>
      <br />
      <ul>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          starWarsCharacters.map(({ name, gender }) => (
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
