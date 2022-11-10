import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import PaintingsContainer from "../PaintingsContainer/PaintingsContainer";
// import SinglePainting from "../SinglePainting/SinglePainting";
// import CocktailContainer from "../CocktailContainer/CocktailContainer";
import Footer from "../Footer/Footer";
import "./App.css";
import artistsData from "../../mockData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: artistsData.artists,
    };
  }

  render() {
    return (
      <main>
        <Header />
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <PaintingsContainer artists={this.state.artists} />
        {/* </Route> */}
        {/* <Route component={SinglePainting}>
            <SinglePainting component={SinglePainting} />
          </Route> */}
        {/* <Route component={CocktailContainer}>
            <CocktailContainer component={CocktailContainer} />
          </Route> */}
        {/* </Switch> */}
        <Footer />
      </main>
    );
  }
}

export default App;
