///<reference types = 'cypress'/>
describe('DND Message', function()
{
  beforeEach(function() {
      cy.visit("https://app.release.qa.pur3.net/");
      cy.login();
})


   
it('Creates DND message', function (){
    cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
      const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
      
    if(menuitemtext.includes('Messages'))
      {
        $e1.find('.nav-item-label.ng-binding').click();
      }
       
    cy.wait(1000);
    cy.get('[href="/messages/email/new/draganddrop"]').click({force:true});
    cy.get('[p3-validator="custom:email.validateNameField"]').type('Regression - dnd message ').type(Date.now());
    cy.get('[p3-validator="custom:email.validateSubjectField"]').type('Payment Confirmation');
    cy.contains('button','Next').click({force:true})
    cy.get('[src="https://www.uploadlibrary.shared.qa.pur3.net/NaN/dndtemplates/recipe/thumbnail.jpeg"]').click();
    cy.contains('button','Select').click({force:true})
    cy.contains('button','Next').click({force:true})
    cy.contains('button','Finish').click({force:true})
})})
})
