import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import PaintingsContainer from "../PaintingsContainer/PaintingsContainer";
import SinglePainting from "../SinglePainting/SinglePainting";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import Footer from "../Footer/Footer";
import { getArtistData } from "../../apiCalls";
import SearchByTitle from "../SearchByTitle/SearchByTitle";
import "./App.css";
// import artistsData from "../../mockData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      artists: [],
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getArtistData()
      .then((data) => {
        console.log({ data });
        this.setState({
          loading: false,
          artists: data.artists,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: `Uh oh! That's a ${error.message}, please try again later!`,
        });
      });
  }

  updateSearchByTitle = (value) => {
    this.setState({ searchTitle: value });
  };

  clearSearchByTitle = () => {
    this.setState({ searchTitle: "" });
  };

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchByTitle updateSearchByTitle={this.updateSearchByTitle} />
            <PaintingsContainer
              artists={this.state.artists}
              searchByTitle={this.state.searchTitle}
            />
          </Route>
          <Route
            exact
            path="/artists/:artist"
            render={({ match }) => {
              // console.log("1", match);
              const renderPainting = this.state.artists.find(
                (painting) => painting.id === parseInt(match.params.artist)
              );
              return <SinglePainting artist={renderPainting} />;
            }}
          />

          <Route
            path="/cocktails/:cocktail"
            render={({ match }) => {
              const renderCocktail = this.state.artists.find(
                (cocktails) => cocktails.id === parseInt(match.params.cocktail)
              );
              return <CocktailContainer cocktail={renderCocktail} />;
            }}
          />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
