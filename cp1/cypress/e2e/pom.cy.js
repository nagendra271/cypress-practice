import {LoginPage} from './page/login-pageTest';

const loginPageObj = new LoginPage();

it('with valid credentials',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // loginPageObj.enterUsername("Admin");
    // loginPageObj.enterPassword("admin123");
    // loginPageObj.performClickFunction();

    loginPageObj.login("Admin","admin123")

    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    // cy.get('.oxd-button').click()
})

it("with invalid credentials",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPageObj.login("Admin","test1234");
    cy.get(loginPageObj.login_warn_text_locator).should('have.text','Invalid credentials');
})