
beforeEach(() => {

    cy.visit('/dashboard')
    cy.get(':nth-child(2) > :nth-child(2) > a').click();
    
  
  })


describe("Basic addition of Buy Transactions", () => {
    it("Calculates the figures correctly", () => {
       
        //First Transaction
        cy.get('.form > :nth-child(1) > input').click();
        cy.get('.form > :nth-child(1) > input').type('2021-01-01');
        cy.get('.form > :nth-child(2) > input').clear();
        cy.get('.form > :nth-child(2) > input').type('5'); //Type in coins
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('1'); //Type in price
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('5'); //Type in Total Cost
        cy.get('.select').click()
        cy.wait(5000)
        cy.get('#react-select-5-option-0').click(); //Select Buy
        cy.get('[type="submit"]').click();

        cy.wait(5000)
        //Second Transaction
        cy.get('.form > :nth-child(1) > input').click();
        cy.get('.form > :nth-child(1) > input').type('2021-01-01');
        cy.get('.form > :nth-child(2) > input').clear();
        cy.get('.form > :nth-child(2) > input').type('5'); //Type in coins
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('2'); //Type in price
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('10'); //Type in Total Cost
        cy.get('.select').click()
        cy.wait(5000)
        cy.get('#react-select-5-option-0').click(); //Select Buy
        cy.get('[type="submit"]').click();

        cy.get("#TotalCoins").contains(10)
        cy.get("#TotalCost").contains(15)
        cy.get("#CostBasis").contains(1.5)
        
        
    })
})



