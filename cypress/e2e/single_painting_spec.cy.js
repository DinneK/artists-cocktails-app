describe("The Art of the Cocktail single painting page flow", () => {
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
    cy.visit("http://localhost:3000")
      .get(".card")
      .first()
      .click()
      .url("eq", "http://localhost:3000/artists/1");
  });

  it("Should be able to visit the painting details page and render the correct elements", () => {
    cy.get("h1").contains("The Art of the Cocktail");
  });

  it("Should be able to get the saved cocktail button, click it and be taken to saved cocktail page", () => {
    cy.get(".saved-cocktails-button")
      .click()
      .url("eq", "http://localhost:3000/savedcocktails");
  });

  it("Should see a painting", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", "https://www.moma.org");
  });

  it("Should see a painting description", () => {
    cy.get(".painting-description")
      .get(".single-painting-title")
      .contains("One: Number 31, 1950")
      .get(".single-painting-desc")
      .contains("Year Created: ")
      .get(".single-painting-artist")
      .contains("Jackson Pollock");
  });

  it("Should be able to click on `Discover a Cocktail` and be taken to cocktail details", () => {
    cy.get(".discover").click().url("eq", "http://localhost:3000/cocktails/1");
  });

  it("Should be able to click on `Home` and be taken to the home page", () => {
    cy.get(".home").click().url("eq", "http://localhost:3000/");
  });
});
