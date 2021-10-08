/// <reference types="cypress" />

describe('register test', () => {
    it('visit gallery page', () =>{
        cy.wait(3000);
        cy.visit("https://gallery-app.vivifyideas.com/"); 
     });

    it('click login button', () => {
        cy.get('a[href="/register"]').click();
    });
    //////////  POSITIVE CASES ////////////////////////////////

    /*it("register with valid data", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121212');
        cy.get('input[id="password-confirmation"]').type('12121212');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

     it("register with all digits in first-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type(Math.floor(Math.random()*10000000000));
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all digits in last-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type(Math.floor(Math.random()*10000000000));
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
    it("register with email containing only digits", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('123'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
        it("register with 255 char in first-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
      it("register with 255 char in last-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
        it("register with email containing '.abc'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.abc');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

       it("register with email containing only one digit before '@'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('9@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

        it("register with email containing only one letter before '@'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('w@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

      it("register with all upercase letters in email", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('ABCD'+Math.floor(Math.random()*10000000000)+'@ABC.COM');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
    it("register with 8 digit password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12341234');
        cy.get('input[id="password-confirmation"]').clear().type('12341234');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with mix digit + letters password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('abcd1234');
        cy.get('input[id="password-confirmation"]').clear().type('abcd1234');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 7 letter  + 1 digit password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('abcdabc1');
        cy.get('input[id="password-confirmation"]').clear().type('abcdabc1');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });*/

    //////// NEGATIV CASES //////////

     it("register without first-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear();
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without last-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear();
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without email", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear();
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear();
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without confirmation password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear();
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 256 char in first-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 256 char in last-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces in first-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('     ');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces in last-name", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('         ');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces before '@' in email", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('         ');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing '@'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing '.'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing char between '@' and '.'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email containing unicode between '@' and '.'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@šđžćč.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email containing unicode before '@' ", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('šđžćč'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing 'com'", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email already exists", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abc@abc.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 8 letter password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('abcdabcd');
        cy.get('input[id="password-confirmation"]').clear().type('abcdabcd');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 7 digit password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('1234567');
        cy.get('input[id="password-confirmation"]').clear().type('1234567');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with unicode password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('š?*ć-ž_đ');
        cy.get('input[id="password-confirmation"]').clear().type('š?*ć-ž_đ');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces in password", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('   ');
        cy.get('input[id="password-confirmation"]').clear().type('   ');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with diferent password confirmation", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12312312');
        cy.get('input[id="password-confirmation"]').clear().type('12312313');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without checbox", () => {
        cy.wait(3000);
        cy.get('input[id="first-name"]').clear().type('Nenad');
        cy.get('input[id="last-name"]').clear().type('Damjanovic');
        cy.get('input[id="email"]').clear().type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').clear().type('12121233');
        cy.get('input[id="password-confirmation"]').clear().type('12121233');
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('button[type="submit"]').click();
    });

    
});
