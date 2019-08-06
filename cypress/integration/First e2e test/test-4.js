describe('Testing assertions', function() {

  it('open the `Movies` page', function() {
    cy.visit('/');

    cy.contains('Movies').click();

    cy.url().should('include', 'movies-in-theaters');
    cy.title().should('include', 'New Movies In Theaters - IMDb');

    cy.get('#home_img_holder a').
        should('have.class', 'navbarSprite').
        and('have.attr', 'href', '/?ref_=nv_home');

  });
});
