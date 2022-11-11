import React, { Component } from "react";
import "./SearchByLiquor";

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
      <section>
        <select name="liquors" onChange={this.handleChange}>
          <option value={null}>Select Liquor</option>
          <option value="vodka">Vodka</option>
          <option value="gin">Gin</option>
          <option value="tequila">Tequila</option>
          <option value="absinthe">Absinthe</option>
          <option value="scotch">Scotch</option>
          <option value="champagne">Champagne</option>
          <option value="whiskey">Whiskey</option>
          <option value="mezcal">Mezcal</option>
          <option value="sake">Sake</option>
          <option value="rum">Rum</option>
          <option value="bourbon">Bourbon</option>
        </select>
      </section>
    );
  }
}

export default SearchByLiquor;
