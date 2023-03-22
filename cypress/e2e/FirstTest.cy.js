/// <reference types= 'cypress' />

it('My site should be able to search', () => {
    cy.visit("https://google.com")
    cy.get('.gLFyf').type("Automation step by step")

    cy.wait(2000)

    cy.contains('Google Search').click()

    //another way:
    //cy.get('.gLFyf').type("Automation step by step {enter}")

    //to add timeout 
    // cy.get('.gLFyf', {timeout:5000}).type("Automation step by step {Enter}")

})