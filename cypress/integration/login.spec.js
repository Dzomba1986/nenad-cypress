/// <reference types="Cypress" />

describe('login tests', () => {
   it('visit gallery page', () =>{
        cy.visit(''); 
    }); 

    it('click login button', () => {
        cy.get('a[href="/login"]').click();
    });

    it("login with valid data", () => {
        cy.get('input[id="email"]').type('abcd@abcd.com');
        cy.get('input[id="password"]').type('12341234');
        cy.get('button[type="submit"]').click();
    })

    //it('logout', () => {
      //  cy.get('a[role="button "]').click();
    //});

    it('logout', () => {
        cy.wait(3000);
        cy.get('a[class="nav-link nav-buttons"]').last().click();
    });
});