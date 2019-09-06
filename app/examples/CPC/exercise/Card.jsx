import React, { Component } from "react";

class Card extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((user) => {
        this.setState({ user });
      });
  }

  render() {
    const { title } = this.props;
    const { user } = this.state;

    return (
      <div>
        <h2>{title}</h2>
        {user && (
          <div className="card">
            <img src={user.imgPath} className="card-img-top" alt={`${user.name} photo.`} />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">JWT: {user.JWT}</h6>
              <p className="card-text">
                {user.username} | is admin: {user.admin ? "yes" : "no"}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
