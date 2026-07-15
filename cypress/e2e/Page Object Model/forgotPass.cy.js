import forgotPass from "../../pages/forgotPass"

const forgot = new forgotPass()

describe('Visit forgot password page', () => {

    before(function () {
        forgot.navigateToForgotPass()
    });

    it('Add email and click submit', () => {
        forgot.emailInput()
        forgot.submit()
    })
})