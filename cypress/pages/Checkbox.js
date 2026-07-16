let baseUrl = Cypress.config('baseUrl');

class Checkbox {
    //locators
    checkbox1() {
        return cy.get('#checkboxes > :nth-child(1)')
    }
    checkbox2() {
        return cy.get('#checkboxes > :nth-child(2)')
    }
    checkbox3() {
        return cy.get('#checkboxes > :nth-child(3)')
    }
    checkbox4() {
        return cy.get('[checked=""]')
    }


    //Elements Actions
    navigateToCheckbox() {
        cy.visit(`${baseUrl}/checkboxes`)
    }

    unselectCheckbox() {
        //this.checkbox2().uncheck()
        this.checkbox4().click()
    }

    selectCheckbox() {
        this.checkbox1().click()
        this.checkbox3().click()
        this.checkbox4().click()
        this.checkbox1().click()
        this.checkbox3().click()
    }

}

export default Checkbox 