/// <reference types="Cypress" />

describe('register test', () => {
    it('visit gallery page', () =>{
         cy.visit(''); 
     });

    it('click login button', () => {
        cy.get('a[href="/register"]').click();
    });

    // it("login with valid data", () => {
    //     cy.get('input[id="first-name"]').clear().type('Nenad');
    //     cy.get('input[id="last-name"]').type('Damjanovic');
    //     cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
    //     cy.get('input[id="password"]').type('12121212');
    //     cy.get('input[id="password-confirmation"]').type('12121212');
    //     cy.get('input[type="checkbox"]').check();
    //     cy.get('button[type="submit"]').click();
    // });

    it("login without first-name", () => {
        cy.get('input[id="first-name"]').clear();
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("login without last-name", () => {
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear();
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("login without email", () => {
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear();
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("login without password", () => {
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear();
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("login without confirmation password", () => {
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear();
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});
