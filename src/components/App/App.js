import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import PaintingsContainer from "../PaintingsContainer/PaintingsContainer";
import SinglePainting from "../SinglePainting/SinglePainting";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import Footer from "../Footer/Footer";
import { getArtistData } from "../../apiCalls";
import SearchByTitle from "../SearchByTitle/SearchByTitle";
import SearchByLiquor from "../SearchByLiquor/SearchByLiquor";
import SavedCocktails from "../SavedCocktails/SavedCocktails";
import "./App.css";
// import artistsData from "../../mockData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      artists: [],
      searchTitle: "",
      searchLiquor: "",
      savedCocktails: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getArtistData()
      .then((data) => {
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

  updateSearchByLiquor = (value) => {
    this.setState({ searchLiquor: value });
  };

  clearSearchByLiquor = () => {
    this.setState({ searchLiquor: "" });
  };

  // addCocktail = (newCocktail) => {
  //   this.setState({
  //     savedCocktails: [...this.state.savedCocktails, newCocktail],
  //   });
  // };

  saveACocktail = (id) => {
    const allCocktails = this.state.artists
      .map((singleCocktail) => singleCocktail.cocktail_name)
      .flat();
    const foundCocktail = allCocktails.find((cocktail) => cocktail.id === id);
    this.setState({
      savedCocktails: [...this.state.savedCocktails, foundCocktail],
    });
  };

  render() {
    console.log(this.state.artists);
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchByTitle updateSearchByTitle={this.updateSearchByTitle} />
            <SearchByLiquor updateSearchByLiquor={this.updateSearchByLiquor} />
            <PaintingsContainer
              artists={this.state.artists}
              searchByTitle={this.state.searchTitle}
              searchByLiquor={this.state.searchLiquor}
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
              return (
                <SinglePainting
                  artist={renderPainting}
                  clearSearchByTitle={this.clearSearchByTitle}
                  clearSearchByLiquor={this.clearSearchByLiquor}
                />
              );
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
          <Route exact path="/savedcocktails">
            <SavedCocktails
              artists={this.state.artists}
              savedCocktails={this.state.savedCocktails}
              // addCocktail={this.addCocktail}
            />
          </Route>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
