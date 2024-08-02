describe('Handling frames',()=>{
    it('approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        // the below is for select the paragraph element inside the document, document inside the iframe
        let iframe = cy.get("#mce_0_ifr")
                    .its('0.contentDocument.body')
                    .should('be.visible')
                    .then(cy.wrap);           

        iframe.clear() 
        // the below line is for select the value from drop downs(click dropdown,click Align, click Right)           
        cy.get("[title='Formats']").click().wait(2000).wrap().contains('Align').click().wait(2000).wrap().contains('Right').click()
        //the below line is for type text(Nagendra Medicharla) and select all(ctrl + a);
        iframe.type("Nagendra Medicharla, {ctrl+a}")
        // cy.get("[aria-label='Bold']").click()
    })

    it.skip('approach2',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.wait(2000)

        //here below line cy.getIframe is custom command we have created in the command.js file

        cy.getIframe("#mce_0_ifr").clear()
         
        // the below line is for select the value from drop downs(click dropdown,click Align, click Right)           
        cy.get("[title='Formats']").click().wait(2000).wrap().contains('Align').click().wait(2000).wrap().contains('Right').click()
        //the below line is for type text(Nagendra Medicharla) and select all(ctrl + a);
        cy.getIframe("#mce_0_ifr").type("Nagendra Medicharla, {ctrl+a}")
        // cy.get("[aria-label='Bold']").click()
    })

    it.only('approach-3',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded("#mce_0_ifr");// to load the frames
        cy.get('.tox-notification__dismiss').click()
        cy.iframe("#mce_0_ifr").clear().type("Nagendra Medicharla")
        cy.get("[aria-label='Bold']").click()
    })

    

})