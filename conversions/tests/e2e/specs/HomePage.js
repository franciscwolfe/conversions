// https://docs.cypress.io/api/introduction/api.html

describe('Root Page', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('h1', 'This is a simple app to convert numbers.')
    })
  })
  