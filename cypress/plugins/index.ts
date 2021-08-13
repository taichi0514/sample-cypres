
/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

import dotenv from "dotenv";
import awsConfig from "../../src/aws-exports";

export default (on: any, config: any) => {
  dotenv.config();
  config.env.cognito_username = process.env.AWS_COGNITO_USERNAME;
  config.env.cognito_password = process.env.AWS_COGNITO_PASSWORD;
  config.env.awsConfig = awsConfig
  return config
}