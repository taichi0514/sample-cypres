declare namespace Cypress {
  interface Chainable {
    /**
     * create new board via API
     */
    loginByCognitoApi(username: string, password: string): Chainable<Element>;
  }
}
