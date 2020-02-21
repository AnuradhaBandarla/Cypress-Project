///<reference types = 'cypress'/>
describe('AMI message', function()
{it('create an AMI message',function()
{
    cy.visit("https://app.release.qa.pur3.net/");
    cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
    cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click();
    cy.get('[p3-href="/messages/email"]').click();
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/email/new/ami"]').click();    
    cy.get('[p3-validator="custom:email.validateNameField"]').type('Regression - AMI message ').type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type('Payment Confirmation');
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    cy.get('[p3-validator-message="strictUrl: Provide a valid url for your HTML import"]').type('https://www.thesun.co.uk/');
    cy.get('[p3-validator-message="strictUrl: Provide a valid url for your Plain text import"]').type('https://www.thesun.co.uk/');
    cy.get('.btn.btn-success.flow-action-btn.flow-next').click({force: true});    
    cy.get('.btn.btn-success.flow-action-btn.flow-finish').click();
    
})}
)