/// <reference types='cypress'/>
describe('open v8 app from different browsers', function()
{
    it('login to v8 from chrome', function() {
        cy.visit("https://app.release.qa.pur3.net/");
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        //cy.wait('2000');
        //below is the cypress command to navigate back in the web page
       cy.go('back');
        //below are for negative tests
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest1@23');
        //cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuadha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest1@23');
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
       //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('pureest1@23');        
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anur adha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');        
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest 123');        
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        
        //cy.go('back');
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').clear();
        //cypress cannot accept an empty string for input values --HELP PLEASE
        //cy.get('[p3-validator-bootstrap="username"] > .form-control').type();
        //cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest 123');        
        //cy.get('.btn.btn-success.btn-block.ng-binding').click();
        

        //*need to write a step to clear the previous entries in user name and password fields*
       /* 
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuadham');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
        cy.get('.btn.btn-success.btn-block.ng-binding').click(); 
        How to write regular expressions to cover all input fields, so that all negative cases can be done in one go*/
    })
}
)

