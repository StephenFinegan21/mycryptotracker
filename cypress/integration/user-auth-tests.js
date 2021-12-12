//New user Registration
describe("Bring new user to Registration page", () => {
    it("Loads Registration page", () => {
        cy.visit("/")
        

        //For logging out user if logged in
        if(cy.url().should('include', 'dashboard')){
            cy.get(':nth-child(4) > a').click() 
        }

        cy.get(".grid-container").should("exist")
       
        /* ==== End Cypress Studio ==== */
    })

    //New user Registration
    /* ==== Test Created with Cypress Studio ==== */
    it('Registering a new user', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('#firstName').clear();
        cy.get('#firstName').type('John');
        cy.get('#lastName').clear();
        cy.get('#lastName').type('Smith');
        cy.get('#email').clear();
        cy.get('#email').type('johnsmithtest@test.com');
        cy.get('#password').clear();
        cy.get('#password').type('password');
        cy.get('.MuiButton-root').click();
        /* ==== End Cypress Studio ==== */

        cy.url().should('include', 'dashboard')
    });

     //Testing that duplicate user not created
    /* ==== Test Created with Cypress Studio ==== */
    it('Ensuring a Duplicate user will not be created', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('#firstName').clear();
        cy.get('#firstName').type('John');
        cy.get('#lastName').clear();
        cy.get('#lastName').type('Smith');
        cy.get('#email').clear();
        cy.get('#email').type('johnsmithtest@test.com');
        cy.get('#password').clear();
        cy.get('#password').type('password');
        cy.get('.MuiButton-root').click();
        /* ==== End Cypress Studio ==== */

        cy.get('.error-msg').should('exist');

    });
})