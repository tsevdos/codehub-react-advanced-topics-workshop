import React, { useReducer, useEffect } from "react";
import Loader from "./Loader";

const initialState = {
  data: [],
  isLoading: true,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
  case "ADD_CHARACTERS":
    return { ...state, isLoading: false, data: payload };
  default:
    return state;
  }
};

export default function HookUseReducer() {
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => {
        dispatch({ type: "ADD_CHARACTERS", payload: characters });
      });
  }, []);

  return (
    <div>
      <h2>
        Hooks 04:<small className="text-muted"> useReducer()</small>
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
