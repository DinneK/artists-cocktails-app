import React, { Component } from "react";
import "./SearchByTitle";

class SearchByTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
    this.props.updateSearchByTitle(value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Search for a work by title!"
          onChange={this.handleChange}
        />
        {/* <button onChange={this.handleChange}></button> */}
      </form>
    );
  }
}

export default SearchByTitle;
