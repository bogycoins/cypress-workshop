describe('This is my first action', function() {

  it('clicks the word `Movies`', function() {
    cy.visit('/');

    cy.contains('Movies').click();

    cy.get('#navbar-query').type('Lord of the rings');

    cy.get('#quicksearch').select('Advanced Search »');
  });
});
