describe('Viewing headlines', () => {
  beforeEach(() => {
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
  })

  it.skip('shows the correct headline on the page', () => {
    cy.get('[className="headline"]').first().contains('TestHeadline')
  })

  it('shows the correct image on the page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[class="article-image"]').first()
      .should('have.attr', 'src')
      .should('include', 'TestThumbnailUrl')
  })
})
