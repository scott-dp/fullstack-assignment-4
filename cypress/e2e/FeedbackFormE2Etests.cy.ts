// https://on.cypress.io/api

describe('Check if submit button is invalid if form details are invalid', () => {
    it('visits the app root url', () => {
      cy.visit('/')
      cy.get("#routerToForm").click();
      cy.get('#name').type('myuser')
      cy.get('#message').type('message')
      // assert that send form button is disabled when only name and message is filled out
      cy.get("#sendFormButton").should("be.disabled");
    })
  })

describe('Fill out valid form and submit', () => {
    it('visits the app root url', () => {
      cy.visit('/')
      cy.get("#routerToForm").click();
      cy.get('#name').type('myuser')
      cy.get("#email").type("email")
      cy.get('#message').type('message')
      // assert that send form button is disabled when only name and message is filled out
      cy.get("#sendFormButton").click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Form sent'); // Replace with the expected alert message
      });
    })
  })
  