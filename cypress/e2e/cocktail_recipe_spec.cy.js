describe("The Artof the Cocktail cocktail recipe page flow", () => {
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
      .url("eq", "http://localhost:3000/artists/1")
      .get(".discover")
      .click()
      .url("eq", "http://localhost:3000/cocktails/1");
  });

  it("Should be able to visit the recipe page and render the correct elements", () => {
    cy.get("h1").contains("The Art of the Cocktail");
  });

  it("Should be able to get the saved cocktail button, click it and be taken to saved cocktail page", () => {
    cy.get(".saved-cocktails-button")
      .click()
      .url("eq", "http://localhost:3000/savedcocktails");
  });

  it("Should see a cocktail", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", "https://summitsips.com");
  });

  it("Should see a cocktail description", () => {
    cy.get(".inner-cocktail-description")
      .get(".single-cocktail-title")
      .contains("The Jackson Pollock Cocktail")
      .get(".single-cocktail-desc")
      .contains("Ingredients: ")
      .get(".single-cocktail-liquor")
      .contains("Gin");
  });

  it("Should be able to click on `Back` and be taken to painting details", () => {
    cy.get(".back").click().url("eq", "http://localhost:3000/artists/1");
  });

  it("Should be able to click on `Home` and be taken to the home page", () => {
    cy.get(".home-from-cocktail").click().url("eq", "http://localhost:3000/");
  });

  it("Should be able save a cocktail", () => {
    cy.get(".save-logo")
      .click()
      .get(".saved-cocktails-button")
      .click()
      .url("eq", "http://localhost:3000/savedcocktails")
      .get("img")
      .should("have.attr", "src")
      .should("include", "https://summitsips.com");
  });

  it("Should be able delete a cocktail", () => {
    cy.get(".save-logo")
      .click()
      .get(".save-logo")
      .click()
      .get(".saved-cocktails-button")
      .click()
      .url("eq", "http://localhost:3000/savedcocktails")
      .get(".error")
      .contains("You have no saved cocktails, go explore!");
  });
});
