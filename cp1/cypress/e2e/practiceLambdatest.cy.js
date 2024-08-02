describe("test cases",()=>{
    it.skip("inputform",()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.get(':nth-child(4) > .text-black').click()
        cy.get('#name').type("Nagendra")
        cy.get('#inputEmail4').type("nagendra@gmail.com")
        cy.get('#inputPassword4').type("12345")
        cy.get('#company').type("fghjk")
        cy.get('#websitename').type("ghjkghj")
        cy.get(':nth-child(3) > .pr-20 > .w-full').select("United States")
        cy.get('#inputCity').type("hyd")
        cy.get('#inputAddress1').type("gowlidoddi, pg")
        cy.get('#inputAddress2').type("gowlidoddi")
        cy.get('#inputState').type("india")
        cy.get('#inputZip').type("456456")
        cy.get('.bg-lambda-900').click()
        cy.get('.success-msg').should('have.text',"Thanks for contacting us, we will get back to you shortly.")
    })

    it.skip("slider",()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.get(':nth-child(8) > .text-black').click()
        cy.get('#slider1 > div.sp__range > .sp__range').invoke('val',100).trigger("change");
        //cy.get('#slider1 > div.sp__range').invoke('val',50).trigger("change")
        
    })
})