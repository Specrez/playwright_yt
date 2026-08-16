const {test, expect} = require('@playwright/test')

//creating a test in playwright
test('My first test', async ({page}) => {

    await page.goto('https://google.com')
    await   expect(page).toHaveTitle('Gooogle')

})