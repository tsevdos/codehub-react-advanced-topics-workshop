import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";

const UserList = ({ users }) => (
  <div>
    <h2 className="is-size-4">Presentational and Container components</h2>
    <h3 className="is-size-5">03: Container component with presentational component children</h3>
    <br/>
    <div>
      { users.map((user) => <UserItem key={user.id} {...user} />) }
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
