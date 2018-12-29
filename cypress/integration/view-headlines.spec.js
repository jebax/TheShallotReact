describe('Viewing headlines', () => {
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

  it('shows the correct headline on the page', () => {
    cy.get('[class="headline"]').first().contains('TestHeadline')
  })

  it('shows the correct image on the page', () => {
    cy.get('[class="articleImage"]').first()
      .should('have.attr', 'src')
      .should('include', 'TestThumbnailUrl')
  })
})
