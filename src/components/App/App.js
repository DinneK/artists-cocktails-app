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
// import artistsData from "../../mockData";

/*
Step 1: Populate the saved cocktails array with IDs
 a: Stop it from populating all cocktails
 b: Write a handler function in the app that takes in an ID sets the saved cocktail state and concats to the saved array
 c: Add button to cocktail container 
 d: wire up the handler from step b to the button from step c
Step 2: Render the ID in the saved cocktails page
Step 3: Find the matching artist object
Step 4: Pull the properties neeeded
Step 5: Render those properties to the page.
Step 6: Wrap Each cocktail in a link to cocktail details
Step 7: Create buttons that link to home, painting, cocktail etc
Step 8: Remove a favorite
a: Create a handler handleDeleteCocktail
b: Takes in an Id
c: Filters array to all elements that are not that ID
d: pass the handler to the child component in saved cocktails and cocktail details
e: wire up the handler to handle click function 
f: wire up the handle function to the onclick of a button
g: create button to delete favorite
*/
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

  handleSaveCocktail = (id) => {
    const { savedCocktails } = this.state;
    if (savedCocktails.includes(id)) {
      return;
    }
    const newSavedCocktailsState = [...savedCocktails, id];
    this.setState({ savedCocktails: newSavedCocktailsState });
  };

  handleDeleteCocktail = (id) => {
    const { savedCocktails } = this.state;
    if (!savedCocktails.includes(id)) {
      return;
    }
    const newSavedCocktailsState = savedCocktails.filter(
      (cocktailId) => cocktailId !== id
    );
    this.setState({ savedCocktails: newSavedCocktailsState });
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
            {this.state.error && (
              <div className="error-container">
                <span className="error">{this.state.error}</span>
              </div>
            )}
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
              return (
                <CocktailContainer
                  cocktail={renderCocktail}
                  onSaveCocktail={this.handleSaveCocktail}
                  onDeleteCocktail={this.handleDeleteCocktail}
                />
              );
            }}
          />
          <Route exact path="/savedcocktails">
            <SavedCocktails
              artists={this.state.artists}
              savedCocktails={this.state.savedCocktails}
              // addCocktail={this.addCocktail}
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
