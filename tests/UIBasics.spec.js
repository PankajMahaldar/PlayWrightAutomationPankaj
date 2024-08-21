const {test, expect} = require('@playwright/test');

test.only('Browser_Context_Automation',async ({browser}) =>
{
    const context= await browser.newContext();
    const page = await context.newPage();
    const UserName = page.locator("#username");
    const signin = page.locator("#signInBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await UserName.fill("rahulshetty");
    await page.locator("#password").fill("learning");
    await signin.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await UserName.clear();
    await UserName.fill("rahulshettyacademy");
    await signin.click();
    const cardTitles =page.locator(".card-title a");
    await cardTitles.first().waitFor();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    await page.waitForLoadState('networkidle');
    console.log(await cardTitles.allTextContents());
    


});

test('Page_Context_Automation', async ({page}) =>
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});