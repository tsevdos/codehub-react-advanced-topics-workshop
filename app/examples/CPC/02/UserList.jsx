import React from "react";
import PropTypes from "prop-types";

const UserList = ({ users }) => (
  <div>
    <h2 className="is-size-4">Presentational and Container components</h2>
    <h3 className="is-size-5">02: Container component with presentational component child</h3>
    <br/>
    <div>
      {
        users.map(({ id, name, username, email, phone }) => (
          <div key={id}>
            <h3 className="is-size-4">{name} ({username})</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
          </div>
        ))
      }
    </div>
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }))
};

export default UserList;
