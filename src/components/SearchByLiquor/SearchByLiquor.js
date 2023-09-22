import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchByLiquor.css";

class SearchByLiquor extends Component {
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
    this.props.updateSearchByLiquor(value);
  };

  render() {
    return (
      <section className="liquor-search">
        <select name="liquors" onChange={this.handleChange} className="search">
          <option value={null}>Select Liquor</option>
          <option value="gin">Gin</option>
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="mezcal">Mezcal</option>
          <option value="rum">Rum</option>
          <option value="whiskey">Whiskey</option>
          <option value="scotch">Scotch</option>
          <option value="bourbon">Bourbon</option>
          <option value="champagne">Champagne</option>
          <option value="sake">Sake</option>
          <option value="absinthe">Absinthe</option>
        </select>
      </section>
    );
  }
}

export default SearchByLiquor;

SearchByLiquor.propTypes = {
  props: PropTypes.func,
};
