import { Given, When, Then } from '@wdio/cucumber-framework';
import DailyMailPage from '../pageobjects/dailyMail.page.ts'

const dailyMailPage = new DailyMailPage();

Given(/^I launch the app$/, async () => {
    await dailyMailPage.openApplication();
});

When(/^I navigate to home page$/, async () => {
    await dailyMailPage.navigateHome();
});

When(/^I navigate recent issue on home page$/, async() => {
    await dailyMailPage.navigateRecentIssue();
});

When(/^I select see more section in recent issues tab$/, async() => {
    await dailyMailPage.selectSeeMoreTab();
});

Then(/^I should be on archive page in all issues screen$/, async() => {
     await dailyMailPage.shouldSeeArchivePage();
});

When(/^I select download icon in dec 27 edition$/, async() => {
    await dailyMailPage.selectDownloadIcon();
});

Then(/^I navigate to signIn page$/, async() => {
     await dailyMailPage.selectSignInButton();
     await dailyMailPage.loginAndDownload();
}); 

When(/^I open the downloaded edition in pdf mode$/, async() => {
    await dailyMailPage.openArticle();
});

Then(/^I navigate and select the 3rd page image$/, async() => {
     await dailyMailPage.navigateToThirdPage();
}); 

When(/^I should see the camera icon$/, async() => {
    await dailyMailPage.verifyCameraIcon();
});

Then(/^I select the camera icon and navigate to full view$/, async() => {
     await dailyMailPage.selectCameraIconImage();
}); 

When(/^I navigate and select the close button in last image$/, async() => {
    await dailyMailPage.navigateToLastPage();
});

Then(/^I should be in article light box page$/, async() => {
     await dailyMailPage.shouldSeeAlbPage();
}); 
