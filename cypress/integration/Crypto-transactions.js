describe("load up login page", () => {
    it("loads up correctly", () => {
        cy.visit("/dashboard")

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > :nth-child(2) > a').click();
        cy.get('.form > :nth-child(1) > input').click();
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('1');
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('1000');
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('1000');
        cy.get('[type="submit"]').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.form > :nth-child(1) > input').click();
        cy.get(':nth-child(2) > input').click();
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('2');
        cy.get(':nth-child(3) > input').click();
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('2000');
        cy.get(':nth-child(4) > input').click();
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('2000');
        cy.get('[type="submit"]').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(4) > .delete-btn').click();
        /* ==== End Cypress Studio ==== */
    })
})