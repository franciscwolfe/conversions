// https://docs.cypress.io/api/introduction/api.html

describe('Currency Conversion', () => {
  it('Gets no result when no input number', () => {
    cy.visit('/currency')
    cy.get('input').clear()
    cy.get('#input-type').select('AUD')
    cy.get('#output-type').select('GBP')       
    cy.get('#result').should('be.empty')
  })

  it('Gets no result when no input currency', () => {
    cy.visit('/currency')
    cy.get('input').type('100')
    cy.get('#input-type').select('')
    cy.get('#output-type').select('GBP')       
    cy.get('#result').should('be.empty')
  })

  it('Gets no result when no output currency', () => {
    cy.visit('/currency')
    cy.get('input').type('100')
    cy.get('#input-type').select('AUD')
    cy.get('#output-type').select('')       
    cy.get('#result').should('be.empty')
  })

  it('Does a calculation', () => {
    cy.visit('/currency')
    cy.get('input').type('100')
    cy.get('#input-type').select('AUD')
    cy.get('#output-type').select('GBP')
    cy.contains('#result', '56')
  })
})
