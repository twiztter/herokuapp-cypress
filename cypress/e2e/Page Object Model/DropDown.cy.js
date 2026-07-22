import DropDown from "../../pages/DropDown";

const dropDown = new DropDown()

describe('Dropdown page', () => {

    before(function () {
        dropDown.navigateToDropDown()
    });

    it('Select option 1', () => {
        dropDown.selectOption1()
        dropDown.selectOption2()
    })
})