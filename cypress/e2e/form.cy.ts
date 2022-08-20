describe("Send Data with form", () => {
  it("Write in inputs", () => {
    cy.visit("/");
    cy.get("#email").type(`${crypto.randomUUID()}@gmail.com`);
    cy.get("#firstName").type("Nelson");
    cy.get("#lastName").type("Hernandez");
    cy.get("#role").type("Web Developer");
  });
  it("Submit form", () => {
    cy.intercept("GET", "/api/data", {
      body: { message: `${crypto.randomUUID()}` },
      statusCode: 404,
    });
    cy.get("form").submit();
  });
});
