it('loads examples', () => {
  const baseUrl = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.contains('Here are some links to help you get started:');
});
