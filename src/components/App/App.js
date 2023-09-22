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
import BadURL from "../BadURL/BadURL";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: "",
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

  handleSaveCocktail = (cocktail) => {
    const { savedCocktails } = this.state;
    const foundCocktail = savedCocktails.find(
      (savedCocktail) => savedCocktail.id === cocktail.id
    );
    if (foundCocktail) {
      return;
    }
    const newSavedCocktailsState = [...savedCocktails, cocktail];
    this.setState({ savedCocktails: newSavedCocktailsState });
  };

  handleDeleteCocktail = (cocktail) => {
    const { savedCocktails } = this.state;
    const newCocktailArr = savedCocktails.filter((savedCocktail) => {
      return savedCocktail.id !== cocktail.id;
    });
    this.setState({ savedCocktails: newCocktailArr });
  };

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <section className="searches">
              <SearchByTitle updateSearchByTitle={this.updateSearchByTitle} />
              <SearchByLiquor
                updateSearchByLiquor={this.updateSearchByLiquor}
              />
            </section>
            {this.state.loading && (
              <div className="loading-container">
                <span className="loading">Loading...</span>
              </div>
            )}
            {this.state.error && (
              <div className="error-container">
                <span className="error">{this.state.error}</span>
              </div>
            )}
            <PaintingsContainer
              artists={this.state.artists}
              searchByTitle={this.state.searchTitle}
              searchByLiquor={this.state.searchLiquor}
              loading={this.state.loading}
            />
          </Route>
          <Route
            exact
            path="/artists/:artist"
            render={({ match }) => {
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
              const {
                artist_liquor_fact,
                cocktail_image,
                cocktail_name,
                id,
                ingredients,
                instructions,
                main_cocktail_liqour,
              } = renderCocktail;
              return (
                <CocktailContainer
                  cocktail={{
                    artist_liquor_fact,
                    cocktail_image,
                    cocktail_name,
                    id,
                    ingredients,
                    instructions,
                    main_cocktail_liqour,
                  }}
                  onSaveCocktail={this.handleSaveCocktail}
                  onDeleteCocktail={this.handleDeleteCocktail}
                  savedCocktails={this.state.savedCocktails}
                />
              );
            }}
          />
          <Route exact path="/savedcocktails">
            <SavedCocktails
              artists={this.state.artists}
              savedCocktails={this.state.savedCocktails}
              onDeleteCocktail={this.handleDeleteCocktail}
            />
          </Route>
          <Route component={BadURL} />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
