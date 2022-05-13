export const viewPortConfig = (type) => {
  switch (type) {
    case "m":
      return cy.viewport(321, 767);

    case "t":
      return cy.viewport(768, 800);

    case "d":
      return cy.viewport(1280, 1000);

    default:
      return cy.viewport(1500, 1000);
  }
};

export const visitPage = (pageName) => {
  cy.visit(pageName);
};
