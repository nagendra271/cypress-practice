// browser navigation

describe('my suit',()=>{
    it('navigation',()=>{
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store")

        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('h2').should('have.text', "Cameras")

        cy.go('back')

        cy.go('forward')

        cy.get('h2').should('have.text', "Cameras")

        cy.go(1)
    })
})