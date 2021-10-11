/// <reference types="Cypress" />

import { loginPage } from '../Page_objects/loginPage';
const faker = require('faker');

describe('upgraded loginPage', () =>{
    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';

    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', () =>{
            cy.visit('https://gallery-app.vivifyideas.com/');
            cy.url().should("contain", "https://gallery-app" )
    })

    
    it('login with valid credentials', () => {
        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/login', 
            (req) => {}
        ).as("validLogin");

       loginPage.login(correctEmail, correctPassword);

       cy.wait('@validLogin').then((inteerception) =>{
           expect(inteerception.respons.satusCode).eq(200);
       })

       loginPage.logoutButton.should('be.visible')
    });

    it('logout', () => {

        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/login', 
            (req) => {}
        ).as("logout");

        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.click();

        cy.wait('@logout').then((inteerception) => {
            expect(interception.response.body.message).eq('Successfully logged out');
            expect(interception.response.statusCode).eq(200);
        })
    })


    it('login with random credentials', () => {
       loginPage.login(userData.randomEmail, userData.randomPassword);
       loginPage.logoutButton.should('not.exist');
        loginPage.errorMessage.should('be.visible');
        loginPage.errorMessage.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
    });
}); 