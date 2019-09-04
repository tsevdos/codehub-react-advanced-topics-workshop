import React, { Component } from "react";
import UserList from "./UserList";

class UserListContainer extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return <UserList users={this.state.users} />;
  }
}

export default UserListContainer;
