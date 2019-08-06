//test - search for a movie and confirm the rating
//The matrix - 8.7

import HomePage from './pages/HomePage';
import MoviePage from "./pages/MoviePage";

describe('Search Movie', () => {
    it('should find the movie', () => {
        const home = new HomePage();
        home.visit();

        const results = home.searchMovie('The Matrix (1999)');

        results.getFirstResult()
            .contains('The Matrix');

        const moviePage = results.selectFirstResult();

        moviePage.getTitle()
            .should('contain', 'The Matrix (1999) - IMDb')
    });

    it('should show a message on empty input', () => {
        const home = new HomePage();
        home.visit();

        const results = home.searchMovie(' ');

        results.getMessage()
            .should('exist')
            .contains('Enter a word or phrase to search on in the form at the top of the page.');
    });

    it('should have score 8.7', () => {
        const home = new HomePage();
        home.visit('tt0133093');

        const moviePage = new MoviePage();

        // verify element's content value
        moviePage.getScore()
            .should('exist')
            .should('contain', '8.7');

        // verify element's text content
        moviePage.getScore()
            .should('have.text', '8.7');

        // verify element attribute and its value
        moviePage.getScore()
            .should('have.attr', 'itemprop')
            .should('equal', 'ratingValue');

        // another option to verify element's text, attributes
        moviePage.getScore().then(($elem) => {
            const text = $elem.text();

            expect(text).to.equal('8.7');

            expect($elem).to.have.attr('itemprop').to.equal('ratingValue')
        })
    });
});
