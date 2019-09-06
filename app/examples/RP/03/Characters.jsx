import { Component } from "react";

class StarWarsCharacters extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const { url, resource, format } = this.props;

    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((characters) => this.setState({ data: characters }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

export default StarWarsCharacters;
