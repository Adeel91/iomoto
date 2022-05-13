describe("Iomoto App", () => {
  context("1600px - 1080px resolution", () => {
    beforeEach(() => {
      cy.viewport(1600, 1080);
    });

    describe("When you try to visit homepage", () => {
      it("Should visit homepage with correct screen resolution", () => {
        cy.visit("/");
      });
    });
  });

  context("1280px - 720px resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 7200);
    });

    describe("When you try to visit homepage", () => {
      it("Should visit homepage with correct screen resolution", () => {
        cy.visit("/");
      });
    });
  });

  context("iPhone8 resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    describe("When you try to visit homepage", () => {
      it("Should visit homepage with correct screen resolution", () => {
        cy.visit("/");
      });
    });
  });

  context("Build all pages", () => {
    describe("Try to open all pages", () => {
      it("Should visit existing pages", () => {
        cy.visit("/admin/dashboard");
        cy.visit("/admin/settings");
      });
    });
  });
});
