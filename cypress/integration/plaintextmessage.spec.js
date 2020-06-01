///<reference types = 'cypress'/>
describe('PT Message', function()
{
  beforeEach(function() {
      cy.visit("https://app.release.qa.pur3.net/");
      cy.login();
})


   
it('Creates Plain text message', function (){
    cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
      const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
      
    if(menuitemtext.includes('Messages'))
      {
        $e1.find('.nav-item-label.ng-binding').click();
      }
       
     cy.wait(1000);
     cy.get('[href="/messages/email/new/plaintext"]').click({force:true});
     //cy.get('[href="/messages/email/new/plaintext"]').should('contain.href','Plain text editor') 

    cy.get('[p3-validator="custom:email.validateNameField"]').type('Regression - PT message ').type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type('Payment Confirmation');
    
    cy.contains('button','Next').click({force:true})
    //cy.get('.btn.btn-success.flow-action-btn.flow-next').click();
    //cy.get('.canvas-preview.ng-pristine.ng-valid.ng-isolate-scope.ng-not-empty.ng-touched').type('asdsd');
    //below locator was copied from cypress test runner, need to work on it
    cy.get('.canvas-preview').clear().type('This is to confirm that we have received your payment');
    cy.contains('button','Next').click({force:true})
    cy.contains('button','Finish').click({force:true})
})})
})
