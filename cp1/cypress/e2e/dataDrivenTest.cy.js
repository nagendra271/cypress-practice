// the tests are driven by set of data thats why it is called data driven test
describe("datadriventestsuit",()=>{
    it("ddt-1",()=>{
        cy.fixture("orangeHrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            
            data.forEach((userData)=>{
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username);
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.password);
                cy.wait(1000)
                cy.get('.oxd-button').click();

                //if condition is for the valid credentials, else is for invalid credentials
                if(userData.username == "Admin" && userData.password=="admin123"){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userData.expected)
                    cy.wait(1000);
                    cy.get('.oxd-userdropdown-tab').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userData.expected)
                }
            })
        })
    })
})