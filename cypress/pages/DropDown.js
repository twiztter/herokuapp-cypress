let baseUrl = cy.config('baseUrl');

class DropDown {
    //locators
    dropdown() {
        return cy.get('#dropdown')
    }


    //Elements Actions
    navigateToDropDown() {
        cy.visit(`${baseUrl}/dropdown`)
    }

    selectOption1() {
        this.dropdown().select('1')
    }

    selectOption2() {
        this.dropdown().select('2')
    }
}

export default DropDown