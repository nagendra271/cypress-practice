describe('handle child tabs',()=>{
    it.skip('ct-1',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example>a").invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(3000)

        cy.go('back');
        cy.url().should('include',"https://the-internet.herokuapp.com/windows")
    })

    it('ct-2', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example>a").then((e)=>{
            let path = e.prop('href')

            cy.visit(path)
        })

        cy.wait(3000)

        cy.go('back');
        cy.url().should('include',"https://the-internet.herokuapp.com/windows")
    })
})