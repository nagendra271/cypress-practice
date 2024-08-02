describe('diff-dropdowns',()=>{

    it('normal drop-down',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('select.custom-select').select("Malta").should('contain.text','Malta')
    })

    it('dropdown without select',()=>{
        cy.visit('dummy ticket')
        //it is availabel in note book
    })

    it('auto sugest dropdown',()=>{
        cy.visit("wikipedia")
        // it is available in note book

    })

    it('dynamic dropdown',()=>{
        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type("cypress automation")
        cy.get(".wM6W7d>span").should('have.length', 12)

        // cy.get(".wM6W7d>span").each(($el, index, $list)=>{
        //     if($el.text() == "cypress automation tool tutorial"){
        //         cy.wrap($el).click()
        //     }
        // })

        // we can use above (using jquery) method or below method

        cy.get(".wM6W7d>span").contains("cypress automation tool tutorial").click()

        cy.get("#APjFqb").should('contain',"cypress automation tool tutorial")
        
    })
})