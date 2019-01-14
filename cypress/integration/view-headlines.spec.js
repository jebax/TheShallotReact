describe('Viewing headlines', () => {
  before(() => {
    cy.server()
    cy.route(Cypress.env('newsUrl'), {
      method: 'GET',
      articles: [
        {
          title: 'TestHeadline',
          url: 'TestUrl',
          urlToImage: 'TestThumbnailUrl'
        }
      ]
    })

    cy.route(Cypress.env('aylienUrl'), {
      method: 'GET',
      sentences: ['One', 'Two', 'Three', 'Four', 'Five']
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
