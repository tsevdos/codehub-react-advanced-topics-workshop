import React from "react";
import Characters from "./Characters";

const App = () => (
  <div>
    <h2>
      Render props 02:<small className="text-muted"> Render props component</small>
    </h2>
    <br />
    <div>
      <Characters
        render={(data) =>
          Boolean(data.length) &&
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
        }
      />
    </div>
  </div>
);

export default App;
