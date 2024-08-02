//fixtures and data driven testing (using json data)

/*
describe("fixture test suit",()=>{
    it("usingnormalmethods",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        cy.wait(2000)
        cy.get('.oxd-button').click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")
    })

    it.only("fixturesDemo",()=>{
        cy.fixture("orangeHrm").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
            cy.wait(2000)
            cy.get('.oxd-button').click();
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
        })
    })
})
*/

//if there is a number of it blocks we can use hooks(before()) insted of use fixtures in every it block.

describe("fixture using hooks",()=>{
    let userData;
    before(()=>{
        cy.fixture("orangeHrm").then((data)=>{
            userData = data;
        })
    })

    it("using hooks",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.password);
            cy.wait(2000)
            cy.get('.oxd-button').click();
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userData.expected)
    })
})