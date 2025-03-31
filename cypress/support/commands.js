Cypress.Commands.add('login', () => {
    cy.fixture("credentials").then((credentialsData) => {
        cy.get('#username').type(credentialsData.username);
        cy.get('#password').type(credentialsData.password);
        cy.get('.radius').click()
    })
})