class DailyMailScreen {
    acceptCookies: string;
    videoLink: string;
    playButton: string;
    forwardArrow: string;
    backwardArrow: string;
    muteButton: string;
    advertisement: string;
    closeOverLapVideo: string;
    closeOverLapFootball: string;
    sportsButton: string;
    premierLeagueButton: string;
    teamTable: string;
    skipVideo: string;
    constructor() {
        this.acceptCookies = `//button[contains(text(),'Got it')]`;
        this.videoLink = `//a[@href='/video/index.html' and normalize-space()='Video']`;
        this.playButton = `(//*[contains(@class,'vjs-play-control')])[1]`;
        this.backwardArrow = `(//*[contains(@class,'mol-previous-control')])[1]`;
        this.forwardArrow = `(//*[contains(@class,'mol-skip-control')])[1]`;
        this.muteButton = `(//*[contains(@class,'vjs-volume-menu-button')])[1]`;
        this.advertisement = `//div[contains(@class, 'video-ad-label') and text()='Advertisement']`;
        this.closeOverLapVideo = `//div[@id='closeButton']/img`;
        this.closeOverLapFootball = `//*[@class="footballco-close-button"]`;
        this.sportsButton = `//*[@id="page-container"]/div[2]/ul/li[5]/span/a`;
        this.premierLeagueButton = `//*[@id="page-container"]/div[2]/div[2]/div/ul[1]/li[2]/a`;
        this.teamTable = `//*[@id="content"]/div[2]/div[2]/div/div/div/a[3]`;
        this.skipVideo = `(//*[contains(@class,'videoAdUiSkipButton')])[1]`;

    }
}

export default new DailyMailScreen()
