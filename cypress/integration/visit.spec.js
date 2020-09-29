
context('test the website', () => {

  beforeEach(()=> {
    cy.visit('/')
  })

  it('look for an image', () => {

    cy.get('.jumbotron .lead').should('contain.text', 'A web hosting service')
  })


})
