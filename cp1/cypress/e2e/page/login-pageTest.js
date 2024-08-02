export class LoginPage{

    userName_Locator = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    password_Locator = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    Login_clik_btn_locator='.oxd-button';
    login_warn_text_locator='.oxd-alert-content > .oxd-text'

    enterUsername(uname){
        cy.get(this.userName_Locator).type(uname)
    }
    enterPassword(pword){
        cy.get(this.password_Locator).type(pword)
    }
    performClickFunction(){
        cy.get(this.Login_clik_btn_locator).click()
    }
    login(uname,pword){
        cy.get(this.userName_Locator).type(uname)
        cy.get(this.password_Locator).type(pword)
        cy.get(this.Login_clik_btn_locator).click()
    }
}