import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ name, username, email, phone }) => (
  <div>
    <h3 className="is-size-4">{name} ({username})</h3>
    <p>email: {email}</p>
    <p>phone: {phone}</p>
  </div>
);

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default UserItem;
