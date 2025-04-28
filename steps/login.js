const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('the user is on the Newspapers.com homepage', async function () {
  await this.page.goto('https://www.newspapers.com/');
});

When('the user clicks the Sign In button', async function () {
    const signInButton = await this.page.locator('[aria-label="Sign In"]');
    await signInButton.click();
});

When('the user enters valid credentials', async function () {

    await this.page.click('input[name="email"]');  // Click to focus on the email field
    await this.page.keyboard.type('lourdes100@test.com');  // Type the email into the field

    await this.page.click('input[name="password"]');  // Click to focus on the password field
    await this.page.keyboard.type('Test123!');  // Type the password into the field
    // await this.page.click('body');


//   await this.page.type('input[name="email"]', 'lourdes100@test.com',);
//   await this.page.type('input[name="password"]', 'Test123!');
//   await page.waitForTimeout(10000);
});

When('the user clicks the login button', async function () {
    await this.page.waitForSelector('button[disabled=""]:not([disabled])', { state: 'visible' });
    await this.page.isEnabled('button[title="Sign in with Newspapers.com"]');
    await this.page.click('button[title="Sign in with Newspapers.com"]');
});

Then('the user should be logged in successfully', async function () {
  await this.page.waitForTimeout(3000);
  const url = this.page.url();
  expect(url).to.contain('newspapers.com'); // <-- Chai assertion
});
