import assert from 'node:assert'
import DailyMailScreen from '../screens/web/dailyMailWeb.screen.ts';


class DailyMailWebPage {
  constructor() {
    this.acceptCookies();
  }

    async closeOverlap() {
      if(await $(DailyMailScreen.closeOverLapVideo).isDisplayed()) {
        (await $(DailyMailScreen.closeOverLapVideo)).click();
      } 
    }

    async skipVideoAd() {
      if(await $(DailyMailScreen.skipVideo).isDisplayed()) {
        (await $(DailyMailScreen.skipVideo)).click();
      } 
    }

    async launchDailyMail() {
      await browser.url('https://www.dailymail.co.uk/');
      await browser.maximizeWindow();
    }

    async launchDailyMailVideopage() {
      await browser.url('https://www.dailymail.co.uk/video/index.html');
      await browser.maximizeWindow();
    }

    async acceptCookies() {
        await browser.pause(10000);
      if (await $(DailyMailScreen.acceptCookies).isDisplayed()) {
          await (await $(DailyMailScreen.acceptCookies)).click();
      }
    }
  
    async playForwardVideo() {
      await this.closeOverlap();
      await this.skipVideoAd();
      await $(DailyMailScreen.forwardArrow).waitForClickable({timeout:45000});
      await $(DailyMailScreen.forwardArrow).click();
    }
       
    async playBackwardVideo() {
      await this.closeOverlap();
      await this.skipVideoAd();
      await $(DailyMailScreen.backwardArrow).waitForClickable({timeout:45000});
      await $(DailyMailScreen.backwardArrow).click();
    }

    async waitForAdertisement() {
      const videoElement = browser.$('#vjs_video_3_html5_api');
      const srcAttributeValue = videoElement.getAttribute('src');
      if(await videoElement.getAttribute('src') === await srcAttributeValue) {
          return false;
      } else {
          return true;
      }
    }
  
    async togglePlayPause() {
      await $(DailyMailScreen.forwardArrow).waitForClickable({timeout:45000});
      await $(DailyMailScreen.playButton).click();
    }
  
    async toggleMuteUnmute() {
      await browser.pause(10000);
      await $(DailyMailScreen.muteButton).click();
    }

    async selectSportsSection() {
      await this.closeOverlap();
      if(await $(DailyMailScreen.closeOverLapFootball).isDisplayed()) {
        (await $(DailyMailScreen.closeOverLapFootball)).click();
      } 
      await $(DailyMailScreen.sportsButton).click();   
     }

    async natigateToPremeirLeagueTable() {
      await this.closeOverlap();
      if(await $(DailyMailScreen.closeOverLapFootball).isDisplayed()) {
        (await $(DailyMailScreen.closeOverLapFootball)).click();
      } 
      await $(DailyMailScreen.premierLeagueButton).click();
      await browser.pause(10000);
      await this.closeOverlap();
      await $(DailyMailScreen.teamTable).click();
      await browser.pause(10000);
    }

    async retrieveAnyFourTeam() {
      const totalRows = await $$("//*[contains(@class,'competitionTableRow')]");
      const positionLocator = "(//*[contains(@class,'competitionTableRow')]//td[1])[index]";
      const nameLocator = "(//*[contains(@class,'competitionTableRow')]//td[4])[index]";
      const pointsLocator = "(//*[contains(@class,'competitionTableRow')]//td[10])[index]";
      const teamsToRetrieve = ['Liverpool', 'Arsenal', 'Aston Villa', 'Wolves'];
      for(let i = 1; i <= totalRows.length; i++){
        const loc = nameLocator.replace("index",i.toString());
        const locText = await $(loc).getText();
        if(teamsToRetrieve.includes(locText)){
          const pts = await $(pointsLocator.replace("index",i.toString())).getText();
          const pos = await $(positionLocator.replace("index",i.toString())).getText();
          console.log(`${locText} : ${pts} | ${pos}`);
        }
      }
  }
  
  }

export default new DailyMailWebPage;