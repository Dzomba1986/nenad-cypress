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