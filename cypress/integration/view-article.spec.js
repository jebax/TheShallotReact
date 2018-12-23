describe('Viewing an article', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it.skip('has the correct URL', () => {
    cy.find('[className="headline-text"]').first().click()

    cy.url().contains('#articles/1')
  })
})
