describe("The Artof the Cocktail single painting page flow", () => {
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
      .get(".saved-cocktails-button")
      .click()
      .url("eq", "http://localhost:3000/savedcocktails");
  });

  it("Should be able to visit the saved cocktails page and render the correct elements", () => {
    cy.get("h1").contains("The Art of the Cocktail");
  });

  it("Should see no saved cocktails, if none are saved", () => {
    cy.get(".error").contains("You have no saved cocktails, go explore!");
  });

  it("Should see saved cocktails", () => {
    cy.get(".home-from-saved")
      .click()
      .get(".card")
      .first()
      .click()
      .get(".discover")
      .click()
      .get(".save-logo")
      .click()
      .get(".saved-cocktails-button")
      .click()
      .get("img")
      .should("have.attr", "src")
      .should("include", "https://summitsips.com");
  });

  it("Should should be able to click on cocktail and see description", () => {
    cy.get(".home-from-saved")
      .click()
      .get(".card")
      .first()
      .click()
      .get(".discover")
      .click()
      .get(".save-logo")
      .click()
      .get(".saved-cocktails-button")
      .click()
      .get("img")
      .should("have.attr", "src")
      .should("include", "https://summitsips.com")
      .get(".cocktail-image")
      .click()
      .get(".inner-cocktail-description")
      .get(".single-cocktail-title")
      .contains("The Jackson Pollock Cocktail")
      .get(".single-cocktail-desc")
      .contains("Ingredients: ")
      .get(".single-cocktail-liquor")
      .contains("Gin");
  });

  it("Should be able to delete a cocktail", () => {
    cy.get(".home-from-saved")
      .click()
      .get(".card")
      .first()
      .click()
      .get(".discover")
      .click()
      .get(".save-logo")
      .click()
      .get(".saved-cocktails-button")
      .click()
      .get(".save-logo")
      .click()
      .get(".error")
      .contains("You have no saved cocktails, go explore!");
  });

  it("Should be able to click on `Home` and be taken to the home page", () => {
    cy.get(".home-from-saved").click().url("eq", "http://localhost:3000/");
  });
});
