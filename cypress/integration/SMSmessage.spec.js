///<reference types = 'cypress'/>
describe('SMS Message', function()
{
  beforeEach(function() {
      cy.visit("https://app.release.qa.pur3.net/");
      cy.login();
})


   
it('Creates SMS message', function (){
    cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
      const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
      
    if(menuitemtext.includes('Messages'))
      {
        $e1.find('.nav-item-label.ng-binding').click();
      }
       
    //cy.wait(1000);
    cy.get('.btn.btn-success.dropdown-toggle.new-message.ng-binding').click();
    cy.get('[href="/messages/sms/new"]').click()   
    cy.get('[p3-validator="custom:sms.validateNameField"]').type('Regression - Payment Confirmation SMS').type(Date.now());
    cy.get('.col-md-11').type('This is to confirm that we have received your payment');
    cy.contains('button','Finish').click({force:true})
})})
})
// why is the below error rendered once the test is finished?
//CypressError: Timed out retrying: Expected to find element: '.btn.btn-success.dropdown-toggle.new-message.ng-binding', but never found it.
