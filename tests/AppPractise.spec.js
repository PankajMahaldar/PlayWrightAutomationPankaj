const {test,expect} = require('@playwright/test');

test('PractiseLogin',async ({page}) =>
{
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    //networkidle is flaky sometime
    await page.waitForLoadState('networkidle');
    //So we are using waitFor concept for waiting multiple elements.
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
}
);