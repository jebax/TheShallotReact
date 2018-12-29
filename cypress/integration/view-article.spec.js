describe('Viewing an article', () => {
  beforeEach(() => {
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
  })

  it('has the correct URL', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[class="headline"]').first().click()

    cy.url().should('include', 'articles/0')
  })

  it('links back to the article list by clicking on the app title', () => {
    cy.get('[id="shallot-title"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('lists the correct headline', () => {
    cy.get('[class="headline"]').first().click()
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
