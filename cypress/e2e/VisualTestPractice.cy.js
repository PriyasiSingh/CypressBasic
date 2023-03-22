/// <reference types='cypress' />
import { LoginPage } from "./PageObject/LoginPage"

describe('Visual validation', () => {
    before(() => cy.visit('https://opensource-demo.orangehrmlive.com/'))

    beforeEach(() => {
        cy.eyesOpen({
            appName: 'HRDemoSite',
            batchName: 'Checking login'
            // browser: [
            //     {name:'chrome'}
            // ]
        })
    })

    afterEach(() => {
        cy.eyesClose()
    })

    it('user should be able to login', () => {

        cy.eyesCheckWindow('Default Login screen')

        const loginPage = new LoginPage()
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.eyesCheckWindow('Default Login screen')


    })

})
