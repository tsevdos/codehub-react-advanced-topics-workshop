import React from "react";
import withData from "./withData";

const HoCCharacters3 = ({ data }) => (
  <div>
    <h2>
      Higher-order components 03:
      <small className="text-muted"> configurable withData HoC</small>
    </h2>
    <br />
    <div>
      {Boolean(data.length) &&
        data.map(({ id, name, culture, isFemale }) => (
          <div className="card m-b" key={id}>
            <div className="card-header">{name}</div>
            <div className="card-body">
              <p className="card-text">
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
);

const options = {
  url: "http://localhost:3001",
  format: "json",
  resource: "characters",
};

export default withData(options)(HoCCharacters3);
