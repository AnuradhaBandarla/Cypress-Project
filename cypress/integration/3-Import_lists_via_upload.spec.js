import 'cypress-file-upload';
///<reference types = 'cypress'/>
describe('lists via import', function()
 {
        beforeEach(function() {
            cy.visit("https://app.release.qa.pur3.net/");
            cy.login();
 })
      
it('upload lists in csv format', function()
{    
                cy.get('.main-nav').find('.nav-item.ng-scope').each(($e1, index, $list)=>{
                const menuitemtext=$e1.find('.nav-item-label.ng-binding').text()
                
                if(menuitemtext.includes('Lists'))
                {
                  $e1.find('.nav-item-label.ng-binding').click();
                }
             
       //cy.get('[p3-href="/lists"]').click();
cy.get('[data-test-id="IMPORT_CONTACTS_BUTTON"]').click();
cy.get('[name="listname"]').type('SmokeTest-upload-happylist').type(Date.now());
      

 const fileName = 'list.csv';
 cy.fixture(fileName).then(fileContent => {
  cy.get('[class="file-select"]').upload({ fileContent, fileName, mimeType: 'text/csv' });
});
cy.finish_list_upload();


       //cy.wait(1000);

        })}
)})      