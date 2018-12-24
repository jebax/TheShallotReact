describe('Viewing an article', () => {
  before(() => {
    cy.server()
    cy.route(Cypress.env('guardianUrl'), {
      method: 'GET',
      response: {
        results: [
          {
            webTitle: 'TestHeadline',
            webUrl: 'http://localhost:3000/TestUrl',
            fields: {
              thumbnail: 'TestThumbnailUrl'
            }
          }
        ]
      }
    })

    cy.route(Cypress.env('aylienUrl'), {
      method: 'GET',
      sentences: ['One', 'Two', 'Three', 'Four', 'Five']
    })

    cy.visit('http://localhost:3000')
  })

  it('has the correct URL', () => {
    cy.get('[class="headline"]').first().click()

    cy.url().should('include', 'articles/0')
  })

  it('lists the correct headline', () => {
    cy.get('[class="summary-headline"]').contains('TestHeadline')
  })

  it('displays the summary of the article on the page', () => {
    cy.get('[class="summary-text"]').contains('OneTwoThreeFourFive')
  })

  it('links to the article by clicking on headline', () => {
    cy.get('[class="summary-headline"]').click()
    cy.url().should('eq', 'http://localhost:3000/TestUrl')
  })
})
