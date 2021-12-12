//Loads correct page
describe("load up login page", () => {
    it("loads up correctly", () => {
        cy.visit("/dashboard")
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

    describe("Ability to add a crypto", () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('Add a new Crypto', function() {
        /* ==== Generated with Cypress Studio ==== */
       
        cy.get('.css-1no7wx6-container').click();
        cy.get('#react-select-3-option-3').click();
        cy.get('.add-crypto-btn').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
       
        /* ==== End Cypress Studio ==== */
    });
})


describe("Ability to Delete a crypto", () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('Deleted a Crypto', function() {
        /* ==== Generated with Cypress Studio ==== */
       
        
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(3) > :nth-child(5) > button').click();
        /* ==== End Cypress Studio ==== */
    });
})