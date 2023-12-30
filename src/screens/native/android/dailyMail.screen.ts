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
    openBook: string;
    thirdPage: string;
    thirdPageImageView: string;
    cameraView: string;
    closeButton: string;
    shareButton: string;
    constructor() {
        this.dismiss = `//android.view.ViewGroup[@index=1]//ancestor::android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]`;
        this.continue = `//android.widget.TextView[@text="Continue"]`;
        this.homePage = `//android.widget.Button[@content-desc="Newspaper"]`;
        this.recentIssue = `//android.widget.TextView[@text="Recent issues"]/following-sibling::android.widget.HorizontalScrollView`;
        this.seeMore = '//android.widget.TextView[@text="SEE MORE"]//ancestor::android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup';
        this.archive = '//android.widget.TextView[@text="Archive"]';
        this.downloadIcon = '//android.widget.TextView[@text="25 December 2023"]//ancestor::android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup';
        this.signIn = '//android.widget.TextView[@text="Sign in"]';
        this.emailId = '//android.widget.EditText[@resource-id="login.email"]';
        this.password = '//android.widget.EditText[@resource-id="login.password"]';
        this.logInButton = '//android.widget.Button[@text="Sign in"]';
        this.openBook = '//android.view.ViewGroup[@content-desc="Tap me to open the sections menu"]';
        this.thirdPage = `//android.widget.TextView[@text="3 of 54"]`;
        this.thirdPageImageView = `//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout`;
        this.cameraView = `//android.widget.TextView[@text="Downloaded"]`;
        this.closeButton = `//android.widget.TextView[@text="Close"]`;
        this.shareButton = `//android.view.ViewGroup[@content-desc="Share Article"]`;
    }
}

export default new DailyMailScreen();