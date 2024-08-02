//click links using label
//overwriting existing using contains() command
//re-usable custom command


describe("custom commands",()=>{
    it.skip('without custom command',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()
        cy.get('h1').should('have.text',"Apple MacBook Pro 13-inch")
    })

    it('with custom commands',()=>{
        cy.visit("https://demo.nopcommerce.com/"); 
        // cy.clickLink('Apple MacBook Pro 13-inch');
        cy.clickLink('APPLE MacBook Pro 13-inch')
        cy.get('h1').should('have.text',"Apple MacBook Pro 13-inch");
    })
})