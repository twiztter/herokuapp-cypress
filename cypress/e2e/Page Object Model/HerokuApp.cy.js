import HerokuAuthForm from '../../pages/HerokuAuthForm'

const auth = new HerokuAuthForm

describe('Visit herokuapp', () => {

    before(function () {
        auth.navigateToHome()
    });

    it('Click on login form', () => {
        auth.clickAuthButton()
    })

    it('Adding user and password', () => {
        auth.UserAndPassInputs()
    })

    it('click logout button',() => {
        auth.logout()
    })
})