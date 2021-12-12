
//Loads correct page
describe("load up login page", () => {
    it("loads up correctly", () => {
        cy.visit("/login")
        cy.get(".grid-container").should("exist")

       
    })
})

//Correct login details
describe("Login functionality works", () => {
    it("User is logged in and can see Dashbaord", () => {
        
        cy.get('#email').clear();
        cy.get('#email').type('max@power.com');
        cy.get('#password').clear();
        cy.get('#password').type('password');
        cy.get('.MuiButton-root').click();
        cy.url().should('include', 'dashboard')
       
    })
})

//Incorrect login details
describe("Testing that login is denied with incorrect details", () => {
    it("Login denied with incorrect details", () => {

        cy.get(':nth-child(4) > a').click() 
        
        cy.get('#email').clear();
        cy.get('#email').type('max@powerfalse.com');
        cy.get('#password').clear();
        cy.get('#password').type('password');
        cy.get('.MuiButton-root').click();
        
        
        cy.get('.error-msg').should('exist');
       
    })
})