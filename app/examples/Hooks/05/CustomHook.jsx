import React from "react";
import useCharacters from "./useCharacters";
import Loader from "./Loader";

export default function CustomHook() {
  const settings = {
    url: "http://localhost:3001",
    format: "json",
    resource: "characters",
  };
  const { data, isLoading } = useCharacters(settings);

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
          data.map(({ id, name, culture, isFemale }) => (
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
      </ul>
    </div>
  );
}
