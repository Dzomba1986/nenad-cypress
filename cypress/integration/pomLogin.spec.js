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
       loginPage.login(correctEmail, correctPassword);
       loginPage.logoutButton.should('be.visible')
    });

    it('logout', () => {
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.click();
    })


    it('login with random credentials', () => {
       loginPage.login(userData.randomEmail, userData.randomPassword);
       loginPage.logoutButton.should('not.exist')    
    });
}); 