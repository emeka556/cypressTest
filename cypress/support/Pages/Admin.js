class Admin{

    admin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

            }
searchAdmin(){
    cy.get(':nth-child(2) > .oxd-input').type("Dominic.Chase")
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
   cy.get('.oxd-form-actions > .oxd-button--secondary').click()

}

select(){

    const selectIcons = cy.xpath("//div[@class='oxd-select-text-input']")
    selectIcons.first().click()
    const container = cy.xpath("//div[contains(@class,'oxd-select-dropdown')]")
    container.contains('Admin').click()
}

AdminAssertion() {
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    //cy.contains("Dominic Chase").should("be.visible")
    
}


}

export default Admin;