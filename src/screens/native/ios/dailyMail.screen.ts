class DailyMailScreen {
    dismiss: string;
    continue: string;
    homePage: string;
    recentIssue: string;
    seeMore: string;
    archive: string;
    downloadIcon: string;
    emailId: string
    password: string
    signIn: string;
    logInButton: string;
    frontpage: string;
    constructor() {
        this.dismiss = `(//XCUIElementTypeOther[@name="Failover This is a failover test. Read more about failover"])[2]/XCUIElementTypeOther[1]`;
        this.continue = `//XCUIElementTypeOther[@name="Continue"]`;
        this.homePage = `//XCUIElementTypeButton[@name="Newspaper"]`;
        this.recentIssue = '//XCUIElementTypeStaticText[@name="Recent issues"]';
        this.seeMore = '(//XCUIElementTypeOther[@name="SEE MORE"])[9]';
        this.archive = '(//XCUIElementTypeOther[@name="Archive"])[1]';
        this.downloadIcon = '(//XCUIElementTypeOther[@name="Monday, 25 December 2023"])[2]';
        this.signIn = '//XCUIElementTypeOther[@name="Sign in"]';
        this.emailId = '//XCUIElementTypeOther[@name="main"]/XCUIElementTypeTextField'
        this.password = '//XCUIElementTypeOther[@name="main"]/XCUIElementTypeSecureTextField'
        this.logInButton = '//XCUIElementTypeButton[@name="Sign in"]'
        this.frontpage = '//android.widget.TextView[@text="Front page"]'

    }
}

export default new DailyMailScreen()