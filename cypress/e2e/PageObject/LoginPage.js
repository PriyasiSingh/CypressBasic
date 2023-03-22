export class LoginPage {
    loginPage_textbox_username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginPage_textbox_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginPage_button_login = '.oxd-button'


    enterUsername(uname) {
        cy.get(this.loginPage_textbox_username).type(uname)
    }

    enterPassword(paswd) {
        cy.get(this.loginPage_textbox_password).type(paswd)

    }

    clickLogin() {
        cy.get(this.loginPage_button_login).click()

    }

}