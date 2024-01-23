/// <reference types="cypress" />

import "cypress-map";
import chaiColors from "chai-colors";
chai.use(chaiColors);
chai.use(require("chai-sorted"));

describe("FSD Module 3", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("T1- Styling 1 - Sans-serif fonts are used for navigation elements and headlines", () => {
    cy.get("#header")
      .should("have.css", "font-family")
      .and("match", /sans-serif/);
  });

  it("T2 - Styling 2 - A serif font is used for paragraphs", () => {
    cy.get("#services > .container > ")
      .should("have.css", "font-family")
      .and("match", /serif/);
  });

  it("T3 - Styling 4 - All gray background elements are in #0a65a0 blue", () => {
    cy.get("#portfolio > :nth-child(1) > .heading-title > h2").should(
      "have.css",
      "color",
      "rgb(10, 101, 160)"
    );
    cy.get("#clients > .container > .heading-title > h2").should(
      "have.css",
      "color",
      "rgb(10, 101, 160)"
    );
  });

  it("T4 - Styling 6 - All headlines (text) are in #0a65a0 blue", () => {
    cy.get(".col-md-8 > .text-center > h2").should(
      "have.css",
      "color",
      "rgb(10, 101, 160)"
    );

    cy.get(".col-sm-4 > .text-center > h2").should(
      "have.css",
      "color",
      "rgb(10, 101, 160)"
    );
  });

  it("T5 - Styling 7 - The foundation date of the company is red, bold and larger than surrounding fonts", () => {
    cy.get("#parallax > .container > .text-center")
      .find("span")
      .should("have.css", "color", "rgb(169, 69, 69)")
      .and("have.css", "font-weight", "700");
  });

  it("T6 - Styling 8 - Tthe Company Highlights section images are spaced properly", () => {
    cy.get(".portfolio-nogutter > .row > :nth-child(1)").should(
      "have.css",
      "padding",
      "0px 15px"
    );
  });

  it("T7 - Styling 9 - Visit Us section Business hours are emphasized", () => {
    cy.get("#biz_address > strong");
    cy.get("#biz_phone > strong");
    cy.get("#biz_phone > strong");
    cy.get("#biz_saturday").should("have.css", "font-weight", "700");
  });

  it("T8 - Styling 10 - Background color of Quote page tabs changes based on the typeof building selected", () => {
    cy.get("#quote-nav").click();
    cy.get(".select-building-type > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(248, 249, 250)"
    );

    cy.get("#building-type").select("Residential");

    cy.get(".select-building-type > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(12, 149, 238)"
    );

    cy.get(".estimate-num-elv > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(12, 149, 238)"
    );

    cy.get(".product-line > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(12, 149, 238)"
    );

    cy.get(".final-pricing-display > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(12, 149, 238)"
    );
    
  });
  it("Styling 11 - Residential (light blue), Commercial (light red), Industrial(gray, no change)", () => {
    // Commercial check
    cy.get("#quote-nav").click();
    cy.get(".select-building-type > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(248, 249, 250)"
    );
    cy.get("#building-type").select("Commercial");
    cy.get(".select-building-type > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(252, 70, 70)"
    );
    cy.get(".estimate-num-elv > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(252, 70, 70)"
    );
    cy.get(".product-line > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(252, 70, 70)"
    );
    cy.get(".final-pricing-display > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(252, 70, 70)"
    );

    // Industrial check

    cy.get("#quote-nav").click();
    cy.get(".select-building-type > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(248, 249, 250)"
    );
    cy.get("#building-type").select("Industrial");
    cy.get(".select-building-type > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(190, 190, 190)"
    );
    cy.get(".estimate-num-elv > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(190, 190, 190)"
    );
    cy.get(".product-line > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(190, 190, 190)"
    );
    cy.get(".final-pricing-display > .card-heading").should(
      "have.css",
      "background-color",
      "rgb(190, 190, 190)"
    );
  });
  it("Form - All required (*) fields are validated", () => {
    // ful name field check
    cy.get("#fullname").should("be.visible");
    cy.get('input[id="fullname"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="fullname"]')
      .type("test")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //email field check
    cy.get("#email").should("be.visible");
    cy.get('input[id="email"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="email"]')
      .type("testgmail.com")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="email"]')
      .clear()
      .type("test@gmail.com")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //phone field check
    cy.get("#phone").should("be.visible");
    cy.get('input[id="phone"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="phone"]')
      .type("test")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //company name field check
    cy.get("#company_name").should("be.visible");
    cy.get('input[id="company_name"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="company_name"]')
      .type("test")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //project name field check
    cy.get("#project_name").should("be.visible");
    cy.get('input[id="project_name"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="project_name"]')
      .type("test")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //project description field check
    cy.get("#project_desc").should("be.visible");
    cy.get('input[id="project_desc"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('input[id="project_desc"]')
      .type("test")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //department field check
    cy.get("#department").should("be.visible");
    cy.get('select[id="department"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('select[id="department"]')
      .select("Residential")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");
    cy.get('select[id="department"]')
      .select("Commercial")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");

    //message field check
    cy.get("#message").should("be.visible");
    cy.get('textarea[id="message"]')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get('textarea[id="message"]')
      .type("test")
      .then(($el) => $el[0].checkValidity())
      .should("be.true");
  });
  it("Form 2 - Only image files are accepted as attachments", () => {
    cy.get("#attachment").should("exist");
    cy.get("#attachment").should(
      "have.attr",
      "accept",
      "image/png, image/gif, image/jpeg, image/jpg"
    );
  });
  it("Form 3 - When sending the form, a POST request is sent to the API", () => {
    cy.get("#contact-nav").click();
    cy.get("#fullname").type("TestName");
    cy.get("#email").type("Tes@gmail.com");
    cy.get("#phone").type("1234567");
    cy.get("#company_name").type("test Inc");
    cy.get("#project_name").type("test that");
    cy.get("#project_desc").type("this test");
    cy.get("#department").select("Residential");
    cy.get("#message").type("its a test");
    cy.get(".col-md-12 > .btn").click();
    cy.request({
      method: "POST",
      url: "/api/contact",
      body: {
        name: "contact",
      },
    }).then(({ status }) => {
      expect(status).to.eq(200);
    });
  });

  it("Form 4 - The response of the POST request is communicated to the front end", () => {
    cy.get("#contact-nav").click();
    cy.get("#fullname").type("TestName");
    cy.get("#email").type("Tes@gmail.com");
    cy.get("#phone").type("1234567");
    cy.get("#company_name").type("test Inc");
    cy.get("#project_name").type("test that");
    cy.get("#project_desc").type("this test");
    cy.get("#department").select("Residential");
    cy.get("#message").type("its a test");
    cy.get(".col-md-12 > .btn").click();
    cy.get("#postResult").should("exist");
  });
  it("Residential Services - a GET request to retrieve a list of agents is sent to the API", () => {
    cy.get("#residential-nav").click({ force: true });
    cy.request({
      method: "GET",
      url: "/api/agents",
      body: {
        name: "agents",
      },
    }).then(({ status }) => {
      expect(status).to.eq(200);
    });
  });
  it("Residential Services 2 - A table is filled with information from agents returned by the API", () => {
    cy.get("#residential-nav").click({ force: true });
    cy.get("#agents-list").should("exist");
    cy.request({
      method: "GET",
      url: "/api/agents",
      body: {
        name: "agents",
      },
    }).then(({ status }) => {
      expect(status).to.eq(200);
    });
  });
  it("Residential Services 3 - Only agents with a rating >= 95 are visible", () => {
    cy.get("#residential-nav").click({ force: true });
  });
  it("Residential Services 4 - The table contains a proper title and proper column names", () => {
    cy.get("#residential-nav").click({ force: true });
    cy.get(".heading-title > h2").contains("Top Rating Agent", {
      matchCase: false,
    });
    cy.get("#first_name").should("be.visible");
    cy.get("#last_name").should("be.visible");
    cy.get("#regions").should("be.visible");
  });
  it("Residential Services 5 - The table is sortable by last name", () => {
    cy.get("#residential-nav").click({ force: true });
    cy.get("#last_name").click();
    cy.get("table tbody tr").map("innerText").then(console.log);
    cy.get("table thead").table().then(console.table);
    cy.get("table thead").table(2, 0).map(Number).should("be.sorted");
  });
  it("Residential Services 6 - The table is sortable by first name", () => {
    cy.get("#residential-nav").click({ force: true });
    cy.get("#first_name").click();
    cy.get("table tbody tr").map("innerText").then(console.log);
    cy.get("table thead").table().then(console.table);
    cy.get("table thead").table(1).map(Number).should("be.sorted");
  });
  it("Residential Services 7 - The table is filterable by region", () => {
    cy.get("#residential-nav").click({ force: true });
    cy.get("#regions").select("North");
    cy.get("table thead th").map("innerText").then(console.log);
    cy.get("table thead").table().then(console.table);
    cy.get("table thead").table(5, 0).map(Number).should("be.sorted");
  });
});
