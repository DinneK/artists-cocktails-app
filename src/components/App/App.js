import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import PaintingsContainer from "../PaintingsContainer/PaintingsContainer";
import SinglePainting from "../SinglePainting/SinglePainting";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
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
        <Switch>
          <Route exact path="/">
            <PaintingsContainer artists={this.state.artists} />
          </Route>
          <Route
            exact
            path="/artists/:artist"
            render={({ match }) => {
              console.log(typeof parseInt(match.params.artist));
              const renderPainting = this.state.artists.find(
                (painting) => painting.id === parseInt(match.params.artist)
              );
              return <SinglePainting artist={renderPainting} />;
            }}
          />

          <Route exact path="/artists/cocktail">
            <CocktailContainer artists={this.state.artists} />
          </Route>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
