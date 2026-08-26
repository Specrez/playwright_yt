import{test, expect} from "@playwright/test"

test('Assertions Demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    //await page.pause()

    //Assertions
    //check elements present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }

    //check elements hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()


    //check elements enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect(page.locator('text=The Kitchen')).not.toHaveText()

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
    
    // check page URL
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    // screenshot
    await expect(page).toHaveScreenshot()

})  