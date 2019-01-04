describe('Viewing an article', () => {
  beforeEach(() => {
    cy.server()

    cy.route(Cypress.env('aylienUrl'), {
      method: 'GET',
      sentences: ['One', 'Two', 'Three', 'Four', 'Five']
    })

    cy.route(Cypress.env('guardianUrl'), {
      method: 'GET',
      articles: [
        {
          description: 'TestHeadline',
          url: 'TestUrl',
          urlToImage: 'TestThumbnailUrl'
        }
      ]
    })
  })

  it('has the correct URL', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[class="headline"]').first().click()

    cy.url().should('include', 'articles/0')
  })

  it('links back to the article list by clicking on the app title', () => {
    cy.get('[id="shallotTitle"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('lists the correct headline', () => {
    cy.get('[class="headline"]').first().click()
    cy.get('[class="summaryHeadline"]').contains('TestHeadline')
  })

  it('displays the summary of the article on the page', () => {
    cy.get('[class="summaryText"]').contains('OneTwoThreeFourFive')
  })

  it('links to the article by clicking on headline', () => {
    cy.get('[class="summaryHeadline"]').click()
    cy.url().should('eq', 'http://localhost:3000/TestUrl')
  })
})
