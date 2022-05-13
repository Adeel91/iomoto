import { viewPortConfig, visitPage } from "../support/helpers";

const logoUrl = "/admin/dashboard";

describe("Iomoto Dashboard", () => {
  beforeEach(() => {
    viewPortConfig("d");
    visitPage(logoUrl);
  });

  context("Dashboard Page Tests", () => {
    describe("Execute logo tests", () => {
      it("Should have logo", () => {
        cy.get("[data-cy=logo]").should("be.visible");
      });

      it("Should have correct url", () => {
        cy.get("[data-cy=logo]").invoke("attr", "href").should("eq", logoUrl);
      });
    });

    describe("Execute navigation tests", () => {
      it("Should have 1 or more navigation items", () => {
        cy.get("[data-cy=nav-items]").find("a").should("have.length", 1);
      });

      it("Should visit correct urls", () => {
        const pageSlugs = ["/admin/dashboard", "/admin/country/1"];

        cy.get("[data-cy=nav-items]")
          .find("a")
          .each((item, index) => {
            cy.wrap(item).invoke("attr", "href").should("eq", pageSlugs[index]);
          });
      });
    });

    describe("Switch between modes tests", () => {
      it("Should switch to live mode", () => {
        window.localStorage.setItem("mode", "live");
        cy.visit(logoUrl);
      });

      it("Should switch to demo mode", () => {
        window.localStorage.setItem("mode", "demo");
        cy.visit(logoUrl);
      });
    });
  });
});
