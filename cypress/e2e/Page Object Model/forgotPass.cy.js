import ForgotPass from "../../pages/ForgotPass"

const forgot = new ForgotPass()

describe('Visit forgot password page', () => {

    before(function () {
        forgot.navigateToForgotPass()
    });

    it('Add email and click submit', () => {
        forgot.emailInput()
        forgot.submit()
    })
})