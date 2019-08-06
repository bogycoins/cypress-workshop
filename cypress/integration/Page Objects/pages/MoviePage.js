import Header from './Header';

class MoviePage {
  constructor() {
    this.header = new Header();
  }

  getTitle() {
    return cy.title()
  }

  getScore() {
    return cy.get('.ratingValue > strong > span')
  }
}

export default MoviePage;
