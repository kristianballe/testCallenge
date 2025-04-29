const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('the user go to Swag labs', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('the user enters credentials in Swag labs', async function() {
  const userNameField = 'input[id="user-name"]';
  const passwordField = 'input[id="password"]';
  await this.page.locator(userNameField).type('standard_user');
  await this.page.locator(passwordField).type('secret_sauce');
});

When('the user click the login button', async function () {
  const loginBtn = 'input[type="submit"]';
  await this.page.locator(loginBtn).click();
});

Then('the app proceeds to inventory page', async function () {
  await this.page.waitForTimeout(2000);
  const label = 'span[class="title"]';
  const labelLocatorContent = await this.page.locator(label).textContent();
  expect(labelLocatorContent).to.contain('Products');
  
  const currentURL = this.page.url();
  expect(currentURL).to.contain('/inventory');
})