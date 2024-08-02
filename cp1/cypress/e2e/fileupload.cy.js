describe('file upload',()=>{
    it("single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile()
    })
})