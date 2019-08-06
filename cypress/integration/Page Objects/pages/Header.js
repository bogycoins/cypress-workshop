class Header {

    // we can return an element if we need it in other page objects
    getSearchBar() {
        return cy.get('#navbar-query');
    }

    // enter search term
    search(text) {
        cy.get('#navbar-query').type(text);
    }

    //select search type
    selectType(type) {
        cy.get('#quicksearch').select(type);
    }

    //click search button
    performSearch() {
        cy.get('#navbar-submit-button').click();
    }
}

export default Header;
