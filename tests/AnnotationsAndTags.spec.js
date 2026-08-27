import  {test} from '@playwright/test'

test.skip('test one', async({page}) => {

})

test('not ready yet', async({page}) => {
    test.fail();
})

test.fixme('test to be fixed', async({page}) =>{

})

test('slow test', async({page}) => {
    test.slow();
})

test('focus this test', async({page}) => {

})

test('test login page @fast', async ({page}) => {

})

// npx playwright test .......... --project chromium --grep "@smoke"

//(skip smoke tests) npx playwright test .......... --project chromium --grep-invert "@smoke"


test('test login page 2 @smoke', async ({page}) => {
    
})
