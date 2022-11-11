describe('App', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=unC8DJvBitfNbQZ6sygQv7bFd2Wxf9xg', {fixture: 'homeNews'})
    cy.visit('https://main.d2mz6ngmdsqe31.amplifyapp.com/')
  })
  it('should have a title', () => {
    cy.get('.head-title').should('contain.text', "All About the News")
  })
  it('should display two news stories', () => {
    cy.get('.article-container').should("have.length", 2)
      .get('.article-container').first().contains("An Inflation-Driven Midterm Will Not Change Biden’s Economic Focus")
      .get('.article-container').last().contains("Letters, Tweets, TV: How Midterm Disinformation Has Washed Over Pennsylvania")
  })
  it('should display navigation categories under the header', () => {
    cy.get('.nav-link').should('have.length', 16)
  })
  // it("should be able to filter to see only articles in the 'books' category", () => {
  //   cy.get('.nav-link').contains("Books").click()
  // })
})