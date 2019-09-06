import React from "react";
import withData from "./withData";

const HoCCharacters2 = ({ data }) => (
  <div>
    <h2>
      Higher-order components 02:
      <small className="text-muted"> withData HoC</small>
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

export default withData(HoCCharacters2);
