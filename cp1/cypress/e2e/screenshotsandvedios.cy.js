// capturing screenshots and videos by using cypress app and cli

describe('ss&video',()=>{
    it('test1',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.screenshot()
        // cy.click()
    })
})
