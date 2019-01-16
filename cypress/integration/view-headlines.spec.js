describe('Viewing headlines', () => {
  describe('From the default news source', () => {
    before(() => {
      cy.server()

      cy.route(Cypress.env('newsUrl'), {
        method: 'GET',
        articles: [
          {
            title: 'TestHeadline',
            urlToImage: 'TestThumbnailUrl'
          }
        ]
      })

      cy.visit('http://localhost:3000')
    })

    it('shows the correct headline on the page', () => {
      cy.get('[class="headline"]')
        .first()
        .contains('TestHeadline')
    })

    it('shows the correct image on the page', () => {
      cy.get('[class="articleImage"]').first()
        .should('have.attr', 'src')
        .should('include', 'TestThumbnailUrl')
    })
  })
  
  describe('From an alternate news source', () => {
    before(() => {
      cy.server()

      cy.route(Cypress.env('secondNewsUrl'), {
        method: 'GET',
        articles: [
          {
            title: 'SecondHeadline',
            urlToImage: 'SecondThumbnailUrl'
          }
        ]
      })
    })

    it('can select an alternate news source from a drop down list', () => {
      cy.get('[class="sourceSelector"]')
        .select('The Guardian')
    })

    it('should display the correct headline on the page', () => {
      cy.get('[class="headline"]')
        .first()
        .contains('SecondHeadline')
    })

    it('shows the correct image on the page', () => {
      cy.get('[class="articleImage"]').first()
        .should('have.attr', 'src')
        .should('include', 'SecondThumbnailUrl')
    })
  })
})
