///<reference types = 'cypress'/>
describe('lists', function()
{it('upload lists in csv format', function()
{
    cy.visit("https://app.release.qa.pur3.net/");
        cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
        cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
        cy.get('.btn.btn-success.btn-block.ng-binding').click();
        cy.get('[p3-href="/lists"]').click();
        cy.get('.btn.btn-success.list-import.ng-binding.ng-scope').click();
        cy.get('[name="listname"]').type('Regression- happylist').type(Date.now());
        //cy.get('.btn:visible').click();
        //cy.get('.btn.btn-default.ng-binding.ng-scope:visible').click();
        //cy.get('[class="btn.btn-default.ng-binding.ng-scope":visible]').click();
        //cy.get('.uploader.text-center.default.ng-isolate-scope.not-uploading').click();
        //cy.get('[p3-select-allow-single="true"]').click();
        cy.get('.file-select').click({force: true});
        //cy.get('[type="radio"]').first().check();
        cy.get('[type="checkbox"]').check();
        
        //cy.get('[name="consentConfirmed"]').check()
        //cy.get('[ng-transclude ng-click="triggerFileSelect()"]').click({force: true});
        //cy.get('span > .btn').click();
        //cy.get('span > .btn').click();
       // cy.get('[type="radio"]').first().check();
        })}
)                       