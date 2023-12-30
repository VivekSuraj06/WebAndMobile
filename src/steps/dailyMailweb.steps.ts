import { Given, When, Then } from '@wdio/cucumber-framework';
import DailyMailWebPage from '../pageobjects/dailyMailWeb.page.ts'

Given(/^I navigate to dailymail video pages$/, async () => {
    await DailyMailWebPage.launchDailyMailVideopage();
    await DailyMailWebPage.acceptCookies();
});

Given(/^I navigate to dailymail home pages$/, async () => {
    await DailyMailWebPage.launchDailyMail();
    await DailyMailWebPage.acceptCookies();
});

When(/^I select video in page to begin playback$/, async() => {
    await DailyMailWebPage.togglePlayPause();
});

When(/^I select the video to pause$/, async() => {
    await DailyMailWebPage.togglePlayPause();
});

When(/^I select on the forward arrow to change to the next video$/, async() => {
        await DailyMailWebPage.playForwardVideo();
});

When(/^I select on the backward arrow to change to the previous video$/, async() => {
    await DailyMailWebPage.playBackwardVideo();
});

When(/^I select on the speaker icon to mute the video$/, async() => {
    await DailyMailWebPage.toggleMuteUnmute();
});

When(/^I select on the speaker icon to unmute the video$/, async() => {
    await DailyMailWebPage.toggleMuteUnmute();
});


When(/^I see the video is finished$/, async() => {
     await DailyMailWebPage.waitForAdertisement();
});   

Then(/^I should see the next video autoplay$/, async() => {
    await DailyMailWebPage.waitForAdertisement();
}); 

When(/^I navigate sports section$/, async () => {
    await DailyMailWebPage.selectSportsSection();
});

When(/^I select and navigate to premier league section$/, async() => {
    await DailyMailWebPage.natigateToPremeirLeagueTable();
});

When(/^I retrieve any 4 teams postition and points$/, async() => {
    await DailyMailWebPage.retrieveAnyFourTeam();
});

When(/^I should display in report$/, async() => {
        await console.log('DONE');
});