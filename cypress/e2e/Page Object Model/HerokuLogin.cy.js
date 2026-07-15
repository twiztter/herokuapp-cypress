import HerokuLogin from '../../pages/HerokuLogin'

const login = new HerokuLogin()

describe('Visit herokuapp', () => {

    before(function () {
        login.navigateToHome()
    });

    it('Click on login form', () => {
        login.clickAuthButton()
    })

    it('Adding user and password', () => {
        login.UserAndPassInputs()
    })

    it('click logout button', () => {
        login.logout()
    })
})