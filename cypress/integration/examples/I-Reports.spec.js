///<reference types = 'cypress'/>
describe ('Reports', function()
{it('Emails Campaigns', function()
{
    
    cy.visit("https://app.release.qa.pur3.net/");
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        //cy.get('[p3-href="/reports/campaigns"]').click();
        cy.get('[p3-href="/reports/campaigns"] > .nav-item-label').click();

}


) 
})