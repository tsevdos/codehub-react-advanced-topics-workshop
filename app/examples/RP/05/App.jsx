import React from "react";
import Characters from "./Characters";
import Loader from "./Loader";

const App = () => (
  <div>
    <h2>
      Render props 05:
      <small className="text-muted"> Render props as children</small>
    </h2>
    <br />
    <div>
      <Characters url="http://localhost:3001" format="json" resource="characters">
        {(data, isLoading) =>
          isLoading ? (
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
          )
        }
      </Characters>
    </div>
  </div>
);

export default App;
