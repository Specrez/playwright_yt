npm init playwright@latest
npm playwright -v 
npx playwright test       
npx playwright test --workers 3
npx playwright test example.spec.js
npx playwright test example 
npx playwright test -g "homepage has Playwright in title"
npx playwright show-report
npx playwright test --project=chromium       
npx playwright test --project=chromium --headed 
npx playwright test --project=chromium --debug 
npx playwright test examples.spec.js:23 --project=chromium --debug
node my_first_test.spec.js
npx playwright codegen
npx playwright codegen google.com
npx playwright codegen --help
npx playwright codegen --browser firefox
npx playwright codegen --target javascript -o second_test.spec.js
npx playwright codegen --viewport-size=800,600
npx playwright codegen --device="iphone 11"
npx playwright codegen --color-scheme=dark
npx playwright show-trace trace.zip
