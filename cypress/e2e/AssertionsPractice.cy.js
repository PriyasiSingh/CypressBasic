/// <reference types= 'cypress' />

it('Assertions demo', () => {
    cy.visit("https://example.cypress.io")

    cy.contains('get').click()

    //implicit assertions
    cy.get('#query-btn')
        .should('be.visible', 'button')
        .and('have.class', 'query-btn')
        .and('be.enabled')

    //explicit assertions
    let name = 'cypress'
    expect(name).to.be.equal('cypress')

    expect(true).to.be.true
    assert.equal(45, 45, 'Numbers are equal')
    assert.equal('9', 9, 'datatypes are not same')
    assert.notStrictEqual('9', 9, 'datatypes are not same')

})