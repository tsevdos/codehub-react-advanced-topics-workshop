import { Component } from "react";

class Characters extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    const { url, resource, format } = this.props;

    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((characters) => this.setState({ data: characters, isLoading: false }));
  }

  render() {
    const { data, isLoading } = this.state;

    return this.props.children(data, isLoading);
  }
}

export default Characters;
