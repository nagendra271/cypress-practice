//Hooks:
//Before     : run once before all test cases 
//BeforeEach : runs before every test block
//AfterEach  : runs after each test block
//After      : runs once all tests are done

describe('Hooks and Tags',()=>{
    // before(()=>{
    //     cy.log("****launching the app****")
    // })
    after(()=>{
        cy.log("***close the app****")
    })
    // beforeEach(()=>{
    //     cy.log("***before test case***")
    // })
    // afterEach(()=>{
    //     cy.log("***after test case***")
    // })
    it("search",()=>{
        cy.log("****serch option******")
    })

    it("advanced search",()=>{
        cy.log("********advanced search*********")
    })
    it("xtra serch",()=>{
        cy.log("*******xtra search********")
    })
})