// https://docs.cypress.io/api/introduction/api.html

describe('Temperature Conversion', () => {
    it('Gets no result when no input number', () => {
      cy.visit('/temperature')
      cy.get('input').clear()
      cy.get('#input-type').select('F')
      cy.get('#output-type').select('K')       
      cy.get('#result').should('be.empty')
    })
  
    it('Gets no result when no input temperature type', () => {
      cy.visit('/temperature')
      cy.get('input').type('100')
      cy.get('#input-type').select('')
      cy.get('#output-type').select('K')       
      cy.get('#result').should('be.empty')
    })
  
    it('Gets no result when no output temperature type', () => {
      cy.visit('/temperature')
      cy.get('input').type('100')
      cy.get('#input-type').select('F')
      cy.get('#output-type').select('')       
      cy.get('#result').should('be.empty')
    })
  
    it('Successfully converts 100F to K', () => {
      cy.visit('/temperature')
      cy.get('input').type('100')
      cy.get('#input-type').select('F')
      cy.get('#output-type').select('K')
      cy.contains('#result', '310.92')
    })
  })
  