/// <reference types="Cypress" />

import { registerPage } from './../Page_objects/registerPage';
const faker = require('faker');

describe('upgraded registerPage', () =>{
    let correctFirstName = 'Nenad';
    let correctLastName = 'Damjanovic';
    let correctEmail = 'abcdee@abcdee.com';
    let correctPassword = '12121255';

    let userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', () =>{
            cy.visit('https://gallery-app.vivifyideas.com/');
            cy.url().should("contain", "https://gallery-app");
    })

    it('register with valid credentials', () => {
       registerPage.register(correctFirstName, correctLastName, correctEmail, correctPassword);
       registerPage.registerButton.should('not.exist');
    })

    it('register with random credentials', () => {
        registerPage.register( userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword);
        registerPage.registerButton.should('not.exist');
    })
});