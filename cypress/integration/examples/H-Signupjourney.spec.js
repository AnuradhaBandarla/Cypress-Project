///<reference types = 'cypress'/>
describe('Signup Journey', function()
{it('Set up a signup journey',function()
{
    //use the below url to test on release
    cy.visit("https://app.release.qa.pur3.net/");
    //use the below url to test on live
    //cy.visit("https://app.pure360.com/");
    cy.get('[p3-validator-bootstrap="username"] > .form-control').type('anuradha');
    cy.get('[p3-validator-bootstrap="password"] > .form-control').type('puretest123');
    cy.get('.btn.btn-success.btn-block.ng-binding').click();
    cy.get('[href="/journeys"]').click();
    cy.get('[data-test-id="new-journey-button"]').click();
    //below element is copied from test runner, needs to work around for the css element
    cy.get(':nth-child(1) > .panel-body > .btn-success').click();
    cy.get('[data-test-id="journey-template-preview_button-get-started"]').click();
    cy.get('[data-test-id="input-field_input-element"]').type('HP-Signup Journey ').type(Date.now());
    cy.get('[data-test-id="journeys-save-modal_save-button"]').click();
    //below element is copied from test runner, needs to work around for the css element
    cy.get('[style="left: 0px; width: 300px; height: 121px; top: 0px; opacity: 1;"] > .journey-node').click({force: true});
    //cy.get('[style="left: 0px; width: 300px; height: 120px; top: 0px; opacity: 1;"]').click({force: true});
    cy.get('[data-test-id="chosen-list_choose-list-button"]').click({force: true});
    //cy.get('[data-test-id="collection-modal_search-input"]').type('HP-signup journeys list');
    cy.get('[data-test-id="collection-modal_search-input"]').type('sign up list go live');
    //cy.get('[data-test-id="slat-container"]').contains('HP-signup journeys list').click();
    cy.get('[data-test-id="slat-container"]').contains('HP-signup journeys list').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    cy.get('.btn-success.pull-right.btn').click({force: true});
    cy.get('[style="left: 0px; width: 300px; height: 89px; top: 150px; opacity: 1;"]').click({force: true});
    cy.get('[data-test-id="choose-message_button"]').click({force: true});
    cy.get('[data-test-id="slat-container"]').contains('dnd').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    cy.get('.btn-success.pull-right.btn').click({force: true});
    //below steps are repeated to select message in the journey. need to find the way to reduce these steps
    cy.get('[style="left: 0px; width: 300px; height: 89px; top: 471px; opacity: 1;"]').click({force: true});
    cy.get('[data-test-id="choose-message_button"]').click({force: true});
    cy.get('[data-test-id="slat-container"]').contains('dnd').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    cy.get('.btn-success.pull-right.btn').click({force: true});
    cy.get('[style="left: 0px; width: 300px; height: 89px; top: 792px; opacity: 1;"] > .journey-node').click({force: true});
    //cy.get('[style="left: 0px; width: 300px; height: 89px; top: 471px; opacity: 1;"]').click({force: true});
    cy.get('[data-test-id="choose-message_button"]').click({force: true});
    cy.get('[data-test-id="slat-container"]').contains('dnd').click();
    cy.get('[data-test-id="collection-modal_save-button"]').click();
    
    cy.get('.btn-success.pull-right.btn').click({force: true});
    cy.wait(5000);
    cy.get('[data-test-id="journey-state-panel_button"]').should('be.visible').click('topRight').click({force: true});
    
    //cy.get('[class="btn-success btn-block btn"]:visible').debug().click({force: true});
    //not sure why its not activating my journey :(
    //cy.get('.btn-success.btn-block.btn').click({force: true});
})}
)