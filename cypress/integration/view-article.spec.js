describe('Viewing an article', () => {
  before(() => {
    cy.server()
    cy.route(Cypress.env('guardianUrl'), {
      method: 'GET',
      response: {
        results: [
          {
            webTitle: 'TestHeadline',
            webUrl: 'TestHeadline',
            fields: {
              thumbnail: 'TestThumbnailUrl'
            }
          }
        ]
      }
    })

    cy.visit('http://localhost:3000')
  })

  it('has the correct URL', () => {
    cy.get('[class="headline"]').first().click()

    cy.url().should('include', 'articles/0')
  })

  it.skip('lists the correct headline', () => {
    cy.get('[class="summary-headline"]').contains('TestHeadline')
  })
})
