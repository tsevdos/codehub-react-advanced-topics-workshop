import React, { useState, useEffect } from "react";

export default function HookUseEffect() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => {
        setCharacters(characters);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>
        Hooks 02:<small className="text-muted"> useEffect()</small>
      </h2>
      <br />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          characters.map(({ id, name, culture, isFemale }) => (
            <div className="card m-b" key={id}>
              <div className="card-header">{name}</div>
              <div className="card-body">
                <p className="card-text">
                  {culture} / {isFemale ? "female" : "male"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
