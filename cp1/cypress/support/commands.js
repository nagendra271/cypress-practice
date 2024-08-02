// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress"/>

require('cypress-iframe'); //it is for to handle frames

require('@4tw/cypress-drag-drop')//it is used for drop downs

import 'cypress-file-upload';

//custom command for iframes
Cypress.Commands.add('getIframe',(iframe)=>{
    cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

//custom command for click links using label

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click()
})

//Over write contains()

/*
Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text, options = {})=>{
    //determine if a filter argument was passed
    if(typeof text === 'object'){
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn(subject, filter, text, options)
})
*/


Cypress.Commands.overwriteQuery(
    "contains", function (contains, filter, text, userOptions = {}){
  
      // This is parameter resolution from Cypress v12.7.0 source
      if (Cypress._.isRegExp(text)) {
        // .contains(filter, text)
        // Do nothing
      } else if (Cypress._.isObject(text)) {
        // .contains(text, userOptions)
        userOptions = text
        text = filter
        filter = ''
      } else if (Cypress._.isUndefined(text)) {
        // .contains(text)
        text = filter
        filter = ''
      }
  
      userOptions.matchCase = false;
  
      let contains0 = contains.bind(this)    // this line fixes the error
  
      return contains0(filter, text, userOptions)
    }
  )


//custom command for the login

Cypress.Commands.add('loginapp',(email, password)=>{
    cy.get()
})