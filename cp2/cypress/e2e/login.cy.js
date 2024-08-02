import { loginpage } from "../pageobject/loginpage";

let loginData = new loginpage()

describe('login with pom',()=>{
    it("test-1",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        loginData.setUsername("Admin");
        loginData.setPassword("admin123")
        loginData.clickLogin();
        loginData.performValidation("Dashboard")
    })
    
})