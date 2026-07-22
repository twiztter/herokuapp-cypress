let baseUrl = Cypress.config('baseUrl');

class ForgotPass {
    //locators
    emailInput() {
        return cy.get('#email').type('testing@mail.com')
    }
    submitButton() {
        return cy.get('#form_submit')
    }

    //Elements Actions
    navigateToForgotPass() {
        cy.visit(`${baseUrl}/forgot_password`)
    }

    enterEmail() {
        this.emailInput()
    }

    submit() {
        this.submitButton().click()
    }
}


export default ForgotPass 