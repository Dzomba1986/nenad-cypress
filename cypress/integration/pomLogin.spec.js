/// <reference types="Cypress" />

import { loginPage } from '../Page_objects/loginPage';
const faker = require('faker');

describe('Improved loginPage', () =>{
    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';

    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', () =>{
            cy.visit('/');
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


    it.only('login with random credentials', () => {
       loginPage.login(userData.randomEmail, userData.randomPassword);

        
});

    it('login with invalid random data', () => {

})
}); 