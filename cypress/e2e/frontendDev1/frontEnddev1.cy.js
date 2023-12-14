/// <reference types="cypress" />

import chaiColors from "chai-colors";
chai.use(chaiColors);

describe("Front En Dev 1", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("Styling 1 - Sans-serif fonts are used for navigation elements and headlines", () => {
    cy.get("#header")
      .should("have.css", "font-family")
      .and("match", /sans-serif/);
  });
  it("Styling 2 - A serif font is used for paragraphs", () => {
    cy.get("#services > .container > ")
      .should("have.css", "font-family")
      .and("match", /serif/);
  });
  it("Styling 3 - Some gray background elements are in #0a65a0 blue", () => {
    cy.get("#news > .container > .heading-title > h2").should(
      "have.css",
      "color",
      "rgb(10, 101, 160)"
    );
  });
  it("Styling 4 - All gray background elements are in #0a65a0 blue", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Styling 5 - Some headlines (text) are in #0a65a0 blue", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Styling 6 - All headlines (text) are in #0a65a0 blue", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Styling 7 - The foundation date of the company is red, bold and larger thansurrounding fonts", () => {
    cy.get(".year")
      .should("have.css", "font-size")
      .and("be.gt", "fs-40 fw-300");
  });
  it.only("Styling 8 - In the Company Highlights section,space things properly.", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Styling 9 - Visit Us section Business hours are emphasized", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Styling 10 - Background color of Quote page tabs changes based on the typeof building selected", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Styling 11 - Residential (light blue), Commercial (light red), Industrial(gray, no change)", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Form - All required (*) fields are validated", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Form 2 - Only image files are accepted as attachments", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Form 3 - When sending the form, a POST request is sent to the API", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Form 4 - The response of the POST request is communicated to the front end", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services - a GET request to retrieve a list of agents is sent to the API", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services 2 - A table is filled with information from agents returned by the API", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services 3 - Only agents with a rating >= 95 are visible", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services 4 - The table contains a proper title and proper column names", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services 5 - The table is sortable by last name", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services 6 - The table is sortable by first name", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
  it("Residential Services 7 - The table is filterable by region", () => {
    // cy.get("#services > .container > ")
    //   .should("have.css", "font-family")
    //   .and("match", /serif/);
  });
});
