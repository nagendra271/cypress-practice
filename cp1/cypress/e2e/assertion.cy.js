describe("assertion test suit",()=>{

    it.skip("implicit assertion test1",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include','opensource-demo')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain','https')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath('//a').should('have.length',5) // to check no of anchor elements

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')
        //console.log("titile is",cy.title())

        //cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click();
        // cy.contains('get').click();
        // cy.get('#query-btn')
        //     .should('contain','Button')
        //     .and('have.class','query-btn btn btn-primary')
        //     .and('be.enabled')
        //     .and('be.visible')
            //.and('not.be.visible')

    })

    it("explicit assertion test2",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // expect(true).to.be.true
        // assert.equal(10,10,"not equal")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()


        let expName = "Seema Plex";

        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName = x.text();

            //BDD behaviour
            /*
            expect(actName).to.equal(expName);
            expect(actName).to.not.equal(expName)
            */

            //TDD behaviour
            /*
            assert.equal(actName,expName);
            assert.notEqual(actName,expName);
            */

        })
    })
})