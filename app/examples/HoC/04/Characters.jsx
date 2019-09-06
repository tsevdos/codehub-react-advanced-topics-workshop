import React from "react";
import withData from "./withData";
import withLoader from "./withLoader";

const HoCCharacters4 = ({ data }) => (
  <div>
    <h2>
      Higher-order components 04:
      <small className="text-muted"> HοC composition (withData and withLoader)</small>
    </h2>
    <br />
    <div>
      {data.map(({ id, name, culture, isFemale }) => (
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

// Order matters
export default withData(options)(withLoader(HoCCharacters4));
