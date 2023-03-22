/// <reference types='cypress' />
import { LoginPage } from "./PageObject/LoginPage"


it('user should be able to login', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    const loginPage = new LoginPage()
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()

})