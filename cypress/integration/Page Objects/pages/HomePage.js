import Header from './Header';
import ResultsPage from './ResultsPage';

class HomePage {
    constructor() {
        this.header = new Header();
    }

    visit(movieId) {
        if (movieId) {
            cy.visit(`/title/${movieId}`);
        } else {
            cy.visit('/');
        }
    }

    searchMovie(movie) {
        this.header.getSearchBar().type(movie);
        //or
        // this.header.search(movie);

        this.header.selectType('Titles');
        this.header.performSearch();

        return new ResultsPage();
    }
}

export default HomePage;
