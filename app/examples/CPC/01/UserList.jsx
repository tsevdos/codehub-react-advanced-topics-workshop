import React, { Component } from "react";

class UserList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <h2 className="is-size-4">Presentational and Container components</h2>
        <h3 className="is-size-5">01: Starting Point</h3>
        <br/>
        <div>
          {
            this.state.users.map(({ id, name, username, email, phone }) => (
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
  }
}

export default UserList;
