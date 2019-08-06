describe('This is my first query', function() {

  it('finds the word `Movies`', function() {
    cy.visit('/');

    // search in the entire page
    cy.contains('Movies');

    // search in the selected element
    cy.get('#consumer_main_nav').contains('Movies');

  });
});
