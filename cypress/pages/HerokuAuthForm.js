let baseUrl = Cypress.config('baseUrl');

class HerokuAuthForm {
    //Locators
    FormAuthButton() {
        return cy.get(':nth-child(21) > a')
    }

    //Element Actions
    navigateToHome() {
        cy.visit('')
    }

    clickAuthButton() {
        this.FormAuthButton().click()
        cy.url().should('eq', `${baseUrl}login`)
        cy.get('.subheader').should('be.visible')
    }

    UserAndPassInputs() {
        cy.login()
        cy.url().should('eq', `${baseUrl}secure`)
        cy.get('.radius').should('be.visible')
    }

    logout() {
        cy.get('.button').should('be.visible')
        cy.get('.button').click()
        cy.get('h2').contains('Login Page')
    }
}

export default HerokuAuthForm