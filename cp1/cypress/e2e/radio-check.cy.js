
describe('radios and checkboxes testing',()=>{
    it.skip('radios',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('input#female').should('be.visible')
        cy.get('input#male').should('be.visible')

        //selecting radio button
        cy.get('input#male').check().should('be.checked');
        cy.get('input#female').should('not.be.checked')

        cy.get('input#female').check().should('be.checked');
        cy.get('input#male').should('not.be.checked')
        
    })

    it('checkbox',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        //get and check monday checkbox
        cy.get('input#monday').should('be.visible')
        cy.get('input#monday').check().should('be.checked')
        //uncheck and asertion 
        cy.get('input#monday').uncheck().should('not.be.checked')

        //get and check all 7 checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        
        //check first & last checkboxes out of 7 checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
        
    })

    it.only('diff check boxes',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get("input#selenium").check().should('be.checked')
        //cy.get("input.custom-control-input[type=radio]").check({force: true}).should('be.checked')
    })
})