describe('This is my first visit', function() {

  it('visits https://www.imdb.com', function() {
    cy.visit('https://www.imdb.com');


    // add in cypress.json
    //"baseUrl": "https://www.imdb.com/"
    //cy.visit('/');
  });
});