import Checkbox from "../../pages/Checkbox"

const checkbox = new Checkbox()

describe('Visit checkbox page', () => {
    before(function () {
        checkbox.navigateToCheckbox()
    })
    it('Select checkbox', () => {
        checkbox.selectCheckbox()
    })
})
