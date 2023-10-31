
export default class LoginPage {
    constructor(){

    }


    visit() {
        cy.visit('http://localhost:3000', { timeout: 300000 });
    }
  
    typeUsername(username) {
      cy.get('#username').type(username);
    }
  
    typePassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('[data-test="signin-submit"]').click();
    }

   
  
  login(username, password){
      this.visit()
      this.typeUsername(username)
      this.typePassword(password)
      this.submit()

  }
}