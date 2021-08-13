import Amplify, { Auth } from "aws-amplify";

Amplify.configure(Cypress.env("awsConfig"));

Cypress.Commands.add("loginByCognitoApi", (username, password) => {
  const log = Cypress.log({
    displayName: "COGNITO LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  });

  const signIn = Auth.signIn({ username, password });

  cy.wrap(signIn, {log: false}).then((cognitoResponse: any) => {
    cy.log("cognitoResponse", cognitoResponse);
    cy.log("keyPrefix", cognitoResponse.keyPrefix);
    cy.log("username", cognitoResponse.username);
    const keyPrefixWithUsername = `${cognitoResponse.keyPrefix}.${cognitoResponse.username}`;
    window.localStorage.setItem("amplify-authenticator-authState", "signedIn");
    log.snapshot("after");
    log.end();
  });

  cy.visit("/");
});
