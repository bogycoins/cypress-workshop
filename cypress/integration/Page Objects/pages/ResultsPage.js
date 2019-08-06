import Header from './Header';
import MoviePage from "./MoviePage";

class ResultsPage {
    constructor() {
        this.header = new Header();
    }

    getMessage() {
        return cy.get('#main > .article');
    }

    getFirstResult() {
        return cy.get('.findResult .result_text a').first()
    }

    selectFirstResult() {
        this.getFirstResult().click();

        return new MoviePage();
    }
}

export default ResultsPage;
