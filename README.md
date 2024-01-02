# Dailymail-web-mobile-generic-framework

Daily mail news webpage and mobile apps automation

## Frameworks:

- WebdriverIO v8
- Cucumber v8

## Features:

- Typescript
- Page Object Pattern
- seperate screen files for android/iOS and web
- Appium
- Cloud testing Integration with BrowserStack
- Share data serice
- Separate config files for each service
- Reporting
  - HTML
  - Spec

## Test execution:

- Checkout the codebase
- Install the packages using npm install

## Run browserStack-web-test
- To run the browserstack web - `npm run bs-web`
- Any test tagged with @webTest will run as a part of above command

## Run browserStack-iOS-test
- To run the browserstack web - `npm run bs-iOS`
- Any test tagged with @iOSTest will run as a part of above command

## Run browserStack-android-test
- To run the browserstack web - `npm run bs-and`
- Any test tagged with @androidTest will run as a part of above command

## Run web-test
- To run the web test - `npm run web-test`
- Any test tagged with @webTest will run as a part of above command

## Run android test
- To run the android mobile test, follow below steps
- spin appium server in terminal like `appium`
- Update capabilities in android.wdio.conf.ts file
- `npm run android-test`
- Any test tagged with @androidTest will run as a part of above command

## Run ios test
- To run the ios mobile test, follow below steps
- spin appium server in terminal like `appium`
- Update capabilities in android.wdio.conf.ts file
- `npm run ios-test`
- Any test tagged with @iosTest will run as a part of above command
