import {test, expect, chromium} from '@playwright/test'

test('Slow Motion Video Recording Demo', async() => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    });

    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/')
    
    // using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Einstein')

    // using css selector
    // #login-button
    await page.locator('#login-button').click()

    // using Xpath
    await page.locator('xpath=//input[@name="password"]').fill('faraday')
    await page.locator('//input[@name="password"]').fill('Ramanujan')

    // using text
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click()

    await context.close();

});