import { config } from '../../src/config'

describe('Viewing headlines', () => {
  before(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: config.guardianUrl,
      response: {
        data: {
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
        }
      }
    })
  })

  it.skip('shows the correct headline on the page', () => {
    cy.visit(config.guardianUrl)
    cy.get('[className=headline]').first().contains('TestHeadline')
  })
})
