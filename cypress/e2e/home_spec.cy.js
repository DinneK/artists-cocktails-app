describe("The Artof the Cocktail home page flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://artists-cocktails-api.herokuapp.com/api/v1/artists",
      {
        statusCode: 200,
        ok: true,
        fixture: "paintings",
      }
    );
    cy.visit("http://localhost:3000");
  });

  it("Should display error handling message to user if the GET network request fails", () => {
    cy.intercept(
      "GET",
      "https://artists-cocktails-api.herokuapp.com/api/v1/artists",
      {
        statusCode: 404,
        ok: false,
      }
    );
    cy.visit("http://localhost:3000").contains(
      `Uh oh! That's a 404, please try again later!`
    );
  });

  it("Should be able to visit the home page and render the correct elements", () => {
    cy.get("h1").contains("The Art of the Cocktail");
  });

  it("Should be able to get the saved cocktail button, click it and be taken to saved cocktail page", () => {
    cy.get(".saved-cocktails-button")
      .click()
      .url("eq", "http://localhost:3000/savedcocktails");
  });

  it("Should be able search for a painting by title", () => {
    cy.get("input")
      .type("one")
      .get('[alt="a painting of One: Number 31, 1950"]');
  });

  it("Should be get a message if no painting exists", () => {
    cy.get("input")
      .type("thodp")
      .get(".error")
      .contains("Sorry, that work doesn't exist! Try again.");
  });

  it("Should be able search for a painting by liquor", () => {
    cy.get("select").select("tequila");
  });

  it("Should be able to slect a painting and go to that paintings details", () => {
    cy.get(".card")
      .first()
      .click()
      .url("eq", "http://localhost:3000/artists/1");
  });
});
