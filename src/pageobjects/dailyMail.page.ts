  import assert from 'node:assert'
  import ActionHelper from '../actionHelper.ts';

  export default class DailyMailPage {
    platform: string;
    DailyMailScreen: any;

    constructor() {
      // @ts-ignore
      this.platform = browser.capabilities.platformName.toLowerCase();
      this.initializeScreen();
    }
    
    //Picks and assigns the screen file based on platform
    async initializeScreen() {
      try {
        this.DailyMailScreen = (await import(`../screens/native/${this.platform}/dailyMail.screen.ts`)).default;
      } catch (error) {
        console.error("Failed to load screen:", error);
      }
    }

    async openApplication() {
      if(this.platform === 'android') {
        await browser.activateApp("com.anmedia.dailymail.kindlefire.uat");
        // this is specific for browserStack android execution- Pleae refer below weblink for more info
        // https://www.browserstack.com/docs/app-automate/appium/troubleshooting/app-orientation-issues#nodejs
        await driver.setOrientation('PORTRAIT');
      } else {
        await browser.activateApp("uk.co.dailymailplus.ipad.uat");
      }
      }

      // Below method will handle daily mail notification POP-UP
      async allowPopUp() {
        const contexts = await browser.getContexts();
        //@ts-ignore
        await browser.switchContext(contexts[0]);
        await $('[name="Allow"]').click();
      }


    async navigateHome() {
      if(this.platform === 'ios') {
        await this.allowPopUp();
      }
      await $(this.DailyMailScreen.dismiss).click();
      for(let i=0; i<=10; i++) {
      if(await $(this.DailyMailScreen.continue).isDisplayed()) {
            await $(this.DailyMailScreen.continue).click();
          }
      }
      await $(this.DailyMailScreen.homePage).waitForDisplayed();
    }

    async navigateRecentIssue() {
      if(this.platform === 'android') {
        const elementToScrollTo = await $(`//android.widget.TextView[@text="Recent issues"]/following-sibling::android.widget.HorizontalScrollView`);
       await ActionHelper.swipeToElement(`//android.widget.TextView[@text="Recent issues"]`, 1,80, 20,80, 20)
      } else {
       await ActionHelper.swipeToElement(`//XCUIElementTypeStaticText[@name="Recent issues"]`, 1,80, 20,80, 20)
      }
    }

    async selectSeeMoreTab() {
      if(this.platform === 'android') {
        await ActionHelper.swipeRightToElement('//android.widget.TextView[@text="SEE MORE"]//ancestor::android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup',4,90,20)
      } else {
        await ActionHelper.swipeRightToElement('(//XCUIElementTypeOther[@name="SEE MORE"])[9]',4,90,20)
      }
      await $(this.DailyMailScreen.seeMore).waitForDisplayed();
      await $(this.DailyMailScreen.seeMore).click();
    }
  
    async shouldSeeArchivePage() {
      await $(this.DailyMailScreen.archive).waitForDisplayed();
      await $(this.DailyMailScreen.archive).click();
    }

    async selectDownloadIcon() {
      await $(this.DailyMailScreen.downloadIcon).waitForDisplayed();
      await $(this.DailyMailScreen.downloadIcon).click();
    }

    async selectSignInButton() {
      await $(this.DailyMailScreen.signIn).click();
      await $(this.DailyMailScreen.emailId).waitForDisplayed({ timeout: 15000 }); // 15 seconds
      await $(this.DailyMailScreen.emailId).setValue('mailqatest94@gmail.com')
      await $(this.DailyMailScreen.password).setValue('World123!')
    }

    async loginAndDownload() {
      await $(this.DailyMailScreen.logInButton).click();
      await browser.pause(10000);
    }

    async openArticle() {
      await $(this.DailyMailScreen.openBook).waitForDisplayed({ timeout: 15000 }); // 15 seconds
    }

    async navigateToThirdPage() {
       await ActionHelper.swipeRightToElement (`//android.widget.TextView[@text="3 of 54"]`,3,90,20);
       await $(this.DailyMailScreen.thirdPageImageView).click()
    }
    
    async verifyCameraIcon() {
       await $(this.DailyMailScreen.cameraView).isDisplayed();
     }

     async selectCameraIconImage() {
      await $(this.DailyMailScreen.cameraView).click();
     }

     async navigateToLastPage() {
      await ActionHelper.swipeRightToElement (`//android.widget.TextView[@text="7 of 7"]`,7,90,20);
      await await $(this.DailyMailScreen.closeButton).isDisplayed();
      await $(this.DailyMailScreen.closeButton).click()
     }

     async shouldSeeAlbPage() {
      await $(this.DailyMailScreen.shareButton).waitForDisplayed();
     };

  }
