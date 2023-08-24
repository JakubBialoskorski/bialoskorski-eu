describe('Testing Main section', () => {
    it('should navigate to the main page and check links', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      // Find a link with an href attribute containing "about"
      cy.get('a[href*="about"]')
      // Find a link with an href attribute containing "JakubBialoskorski"
      cy.get('a[href*="JakubBialoskorski"]')
      // Find a link with an href attribute containing "certificates"
      cy.get('a[href*="certificates"]')
    })
})

describe('Testing Projects section', () => {
    it('should navigate to the projects page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      // Find a link with an href attribute containing "JakubBialoskorski" and click it
      cy.get('a[href*="JakubBialoskorski"]').click()
    })
})

describe('Testing About section', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="about"]').click()
      // The new url should include "/about"
      cy.url().should('include', '/about')
      // The new page should contain a title with "about me"
      cy.get('title').contains('about me')
    })
})
  
describe('Testing Certificates section', () => {
    it('should navigate to the certificates page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      // Find a link with an href attribute containing "certificates" and click it
      cy.get('a[href*="certificates"]').click()
      // The new url should include "/certificates"
      cy.url().should('include', '/certificates')
      // The new page should contain a title with "certificates"
      cy.get('title').contains('certificates')
    })
})