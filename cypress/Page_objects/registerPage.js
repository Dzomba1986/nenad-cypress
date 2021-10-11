export default class RegisterPage{

    get registerButton(){
        return cy.get("a[href='/register']");
    }

    get firstNameInput(){
        return cy.get('#first-name');
    }

    get lastNameInput(){
        return cy.get('#last-name');
    }

    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput(){
        return cy.get('#password');
    }

    get confirmationPasswordInput(){
        return cy.get('#password-confirmation');
    }

    get checboxInput(){
        return cy.get('input[type="checkbox"]');
    }

    get submitButton(){
        return cy.get('button[type="submit"]');
    }

    get allGalleriesButton(){
        return cy.get("[class='nav-link nav-buttons router-link-active']");
    }

    get myGalleryButton(){
        return cy.get("a[href='/my-galleries']");
    }

    get createGalleryButton(){
        return cy.get("a[href='/create']");
    }

    get logoutButton(){
        return cy.get("a[role='button ']");
    }

    get errorMessage(){
        return cy.get("p[class='alert alert-danger']");
    }


register (firstName, lastName, email, password){
    this.registerButton.click();
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.confirmationPasswordInput.type(password);
    this.checboxInput.check();
    this.submitButton.click();
    }
}

export const registerPage = new RegisterPage();