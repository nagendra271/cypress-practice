describe('Mouse events',()=>{
    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/");

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click()
    })

    it('right click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //approach-1
        /*
        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-icon-quit').should('be.visible').click()

        */

        //approach-2:
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-quit').should('be.visible').click()
    })

    it('double click',()=>{
        //ans in note book
    })

    it('drag and drop',()=>{
        //and in notes
    })

    it.only('scrolling',()=>{
        cy.visit('https://example.cypress.io');
        // cy.get(':nth-child(8) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').scrollIntoView({duration:2000})
        cy.get('.home-list > :nth-child(15) > [href="/commands/storage"]').scrollIntoView({duration:2000})
        cy.get(':nth-child(8) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').should('be.visible')
        cy.wait(2000)
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').scrollIntoView({duration:2000})
        cy.wait(2000)
        cy.scrollTo('bottom',{duration:2000})
        // cy.scrollTo('top')
    })
})
