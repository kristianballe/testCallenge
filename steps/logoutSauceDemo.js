const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('the user logged in to Swag labs', async function () {
  await this.page.goto('https://www.saucedemo.com/');
  const userNameField = 'input[id="user-name"]';
  const passwordField = 'input[id="password"]';
  await this.page.locator(userNameField).type('standard_user');
  await this.page.locator(passwordField).type('secret_sauce');

  const loginBtn = 'input[type="submit"]';
  await this.page.locator(loginBtn).click();
});

When('the user click the burger menu', async function() {
  const burgerMenuLocator = 'button#react-burger-menu-btn';
  await this.page.locator(burgerMenuLocator).click();
});

When('the user click the logout', async function () {
  const logoutLocator = 'a#logout_sidebar_link';
  await this.page.locator(logoutLocator).click();
});

Then('the app should successfully logout', async function () {
  await this.page.waitForTimeout(2000);
  const username = 'input#user-name';
  const password = 'input#password';
  const isUsernameVisible = await this.page.isVisible(username);
  expect(isUsernameVisible).to.be.true;

  const isPasswordVisible = await this.page.isVisible(password);
  expect(isPasswordVisible).to.be.true;
  
  const currentURL = this.page.url();
  expect(currentURL).to.contain('https://www.saucedemo.com/');
})