/// <reference types='cypress' />

//add items in todo list
it('should add items in my todo lits', () => {

    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Clean Room {Enter}')
    cy.get('.toggle').click()

    cy.contains('Clear').click()
})

//validate items in todo list
it('should add items in my todo lits', () => {

    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Clean Room {Enter}')
    cy.get('label').should('have.text', 'Clean Room')
    cy.get('toggle').should('not.be.checked')


    cy.get('.toggle').click()
    cy.get('toggle').should('be.checked')
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    cy.contains('Clear').click()
    cy.get('label').should('not.have.text', 'Clean Room')

    //More precice way for Checking that a list has no items:
    cy.get(selector).should('not.have.descendants', 'li')
})

//grouping the actions
describe('should test the todo list', () => {

    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })

    it('should add items to do list', () => {
        cy.get('.new-todo').type('Clean Room {Enter}')
        cy.get('.new-todo').type('Cook Lunch {Enter}')
        cy.get('.new-todo').type('Learn JS {Enter}')

        cy.get('.todo-list').should('have.length', 3)
    })

    it('should strike the work completed', () => {
        cy.get('.todo-list li:nth-child(2) .toggle').click()
        cy.get('.todo-list li:nth-child(2) .toggle').should('be.checked')
    })
})