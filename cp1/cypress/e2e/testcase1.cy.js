describe('test suit-1',()=>{

    it.skip("google search", ()=>{
        cy.visit("https://google.com");
        cy.get('#APjFqb').type("Testing");
        cy.wait(5000)
        // cy.get('.FPdoLc > center > .gNO89b').click({force:true});
        cy.contains("Google Search").click()
        cy.wait(5000)
        cy.get(':nth-child(4) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
        // cy.get(':nth-child(5) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .TbwUpd > :nth-child(2) > .VuuXrf').click({force:true})
    })
    
    it.only("hrm",()=>{
        //cy.visit('/')//base url
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq',"OrangeHRM");
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get("[name='username']").type('Admin')//bu using attribute selector
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        //cy.get('ul.oxd-main-menu').should('have.length',11)
        cy.get('h6.oxd-text.oxd-text--h6').should('contain','Dashboard')
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-input').type("Nagendra")
        //cy.wait(5000)
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    })
    
    it.skip("read the mydata.json file",()=>{
        cy.fixture('myData.json').then((data)=>{
            cy.log(data.username);
            cy.log(data.name)
        })
    })
    
    it.skip("write a new file",()=>{
        cy.writeFile('cypress/fixtures/test1.json',{firstName:"Nagendra",secondName:"Medicharla"})
        //cy.writeFile('cypress/fixtures/test1.json',{flag : 'a+'})
        cy.readFile('cypress/fixtures/test1.json').then((data)=>{
            data.number = 23456789456;
            data.id = 1;
            cy.writeFile('cypress/fixtures/test1.json',data)
        })
    
    })
    
    

})
