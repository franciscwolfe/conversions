// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'This is a simple app to convert numbers.')
  })

  it('Finds convert button disabled when no input number', () => {
    cy.visit('/currency')
    cy.get('input').clear()
    cy.get('#input_currency').select('AUD')
    cy.get('#output_currency').select('GBP')       
    cy.get('#convert').should('be.disabled')
  })

  it('Finds convert button disabled when no input currency', () => {
    cy.visit('/currency')
    cy.get('input').type('100')
    cy.get('#input_currency').select('')
    cy.get('#output_currency').select('GBP')       
    cy.get('#convert').should('be.disabled')
  })

  it('Finds convert button disabled when no output currency', () => {
    cy.visit('/currency')
    cy.get('input').type('100')
    cy.get('#input_currency').select('AUD')
    cy.get('#output_currency').select('')       
    cy.get('#convert').should('be.disabled')
  })

  it('Does a calculation', () => {
    cy.visit('/currency')
    cy.get('input').type('100')
    cy.get('#input_currency').select('AUD')
    cy.get('#output_currency').select('GBP')
    cy.get('#convert').click()
    cy.contains('#result', '56')
  })
})
