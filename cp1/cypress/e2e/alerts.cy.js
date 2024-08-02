describe('alerts',()=>{

/////////////////////////alert with ok button/////////////////////////////
    it('js-alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        //alert will automatically closed by using "ok button" by cypress no need to write any methods for closing 
        cy.get("#result").should('contain','You successfully clicked an alert')
    })
////////////////////conformaton alert//////////////////////////////////////////////

    it('js confirmation alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        }) // this method is used to validate the text inside the alert window

        cy.on('window:confirm',()=>false) // it is used to click cancel button in the alert window

        cy.get("#result").should('have.text',"You clicked: Cancel")
        
        //cy.get("#result").should('have.text',"You clicked: Ok")
    })


/////////////////////////prompt alert///////////////////////////// 

    it('prompt alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // in prompt alert we need to write the text in the input inside alert after that we click the alert button
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        cy.on('window:prompt',(t)=>{
            assert().to.contains("I am a JS prompt")
        })
        // this below 2 lines is for click cancel on alert window, when you click on cancel it will shows "you entered: null"
        //cy.on('window:prompt',()=>{false})
        //cy.get("#result").should('have.text', "You entered: null")

        cy.get("#result").should('have.text','You entered: welcome')

    })


//////////////////////authentication alert////////////////////////////////////////////

    it('authentication alert',()=>{
        // there is two ways to achive this 
        // aproach-1
        /*
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
        cy.xpath('//div/p').should('contain',"Congratulations!")
        */


        //aproach-2
        // in this aproach we added username and password after the https protocol
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.xpath('//div/p').should('contain',"Congratulations!")
    })

})