import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchByTitle.css";

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
      <section>
        <input
          className="search"
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Search for a work by title!"
          onChange={this.handleChange}
        />
      </section>
    );
  }
}

export default SearchByTitle;

SearchByTitle.propTypes = {
  props: PropTypes.func,
};
