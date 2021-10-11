/// <reference types="Cypress" />

import { createGalleryPage } from './../Page_objects/createGallery';
import { loginPage } from '../Page_objects/loginPage';
const faker = require('faker');

describe('create gallery page', () =>{

    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';
    let imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/285px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg';
    let imgUrl2 = 'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg';
    
    let userData = {
        randomTitle: faker.name.title(),
        randomDescription: faker.lorem.word(),
        randomImage: faker.image.animals()
    }
    before ('log into the app', () =>{
            cy.loginViaBackend(Cypress.env('validEmail', 'validPassword'));
         });

         it('visit default url', () => {
             cy.visit('/create');
             loginPage.logoutButton.should('be.visible');
         })

    beforeEach('visit link', () =>{
        cy.wait(3000);
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should("contain", "https://gallery-app");
    })

    it('create gallery with with one image', () => {
        createGalleryPage.login(correctEmail, correctPassword);
        createGalleryPage.loginSubmitButton.should('not.exist');
        createGalleryPage.create(userData.randomTitle, userData.randomDescription, imgUrl);
        createGalleryPage.submitGallery();
        createGalleryPage.createGallerySubmitButton.should('not.exist');
    });

    it('create gallery with two images', () => {
        createGalleryPage.login(correctEmail, correctPassword);
        createGalleryPage.loginSubmitButton.should('not.exist');
        createGalleryPage.create(userData.randomTitle, userData.randomDescription, imgUrl);
        createGalleryPage.addSecondImage(userData.randomTitle, userData.randomDescription, imgUrl2);
        createGalleryPage.submitGallery();
        createGalleryPage.createGallerySubmitButton.should('not.exist');
    });
});