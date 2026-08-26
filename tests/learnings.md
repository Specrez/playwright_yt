await page.pause()
   7 |     // using any object property
>  8 |     await page.click('id=user-name').fill('Oshadha')
     |                                      ^
   9 |     await page.locator('id=user-name').fill('Edison')
  10 |     await page.locator('[id="user-name"]').fill('Einstein')

(Can't use fill in the click)
  //////////////////////////////////

  