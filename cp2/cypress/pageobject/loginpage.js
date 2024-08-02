export class loginpage{
    setUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }

    setPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }

    clickLogin(){
        cy.get('.oxd-button').click()
    }
    
    performValidation(assertiondata){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',assertiondata)
    }
}