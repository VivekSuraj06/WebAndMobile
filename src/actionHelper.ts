const swipePercentages = {
    UP: {
        fromX: 50, toX: 50, fromY: 80, toY: 30
    },
    DOWN: {
        fromX: 50, toX: 50, fromY: 30, toY: 80
    },
    LEFT: {
        fromX: 90, toX: 20, fromY: 50, toY: 50
    },
    RIGHT: {
        fromX: 20, toX: 90, fromY: 50, toY: 50
    }
};

class ActionHelper {

    async launchApp() {
        await driver.launchApp();
    }

    async switchToNativeContext() {
        await browser.switchContext('NATIVE_APP');
    }

    async pause(seconds:any) {
        await browser.pause(seconds * 1000);
    }

    async isVisible(locator:any) {
        return await $(locator).isDisplayed() ? true : false;
    }

    async isExisting(locator:any) {
        return await $(locator).isExisting() ? true : false;
    }

    async click(locator:any) {
        await $(locator).click();
    }

    async waitForElement(locator:any) {
        await $(locator).waitForDisplayed();
    }

    async clearText(locator:any) {
        await $(locator).clearValue();
    }

    async sendText(locator:any, inputText:string) {
        await $(locator).addValue(inputText);
    }

    async getText(locator:any) {
        return $(locator).getText();
    }

    /**
     * Description  - This is the generic method to perform swipe operation in all directions(used internally).
     */

    async swipePage(startXPercentage : any, endXPercentage: any, startYPercentage: any, endYPercentage: any, waitTime = 350) {
        const {width, height} = await driver.getWindowSize();
        const startXPoint = width * startXPercentage / 100;
        const endXPoint = width * endXPercentage / 100;
        const startYPoint = height * startYPercentage / 100;
        const endYPoint = height * endYPercentage / 100;
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: startXPoint,
                    y: startYPoint,
                },
    },
    {
                action: 'wait',
                options: {
                    ms: waitTime,
                },
    },
    {
                action: 'moveTo',
                options: {
                    x: endXPoint,
                    y: endYPoint,
                },
},
            {
                action: 'release',
                options: {},
            },
        ]);
    }

    /**
     * Description  - This is the method to perform swipe operation in all directions until you see the element.
     * This is currently used internally by all swipe direction methods, but can be reused if the swipe needs variation with both x and y axis
     */

    async swipeToElement(locator: string, numberOfSwipesToCheck = 1, startXPercentage : any, endXPercentage: any, startYPercentage: any, endYPercentage: any) {
        let isElementVisible = await this.isVisible(locator);
                let count = 0;
        while (!isElementVisible && count < numberOfSwipesToCheck) {
            ++count;
            await this.swipePage(startXPercentage, endXPercentage, startYPercentage, endYPercentage);
            isElementVisible = await this.isVisible(locator);
        }
        if (!isElementVisible) {
            throw Error(`The element ${locator} is not found even after swiping. Re-check!!`);
        }
    }

        /**
     * Description  - This is the method to perform swipe UP operation.
     * @param {Number} startPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * @param {Number} endPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * Usage - swipeUp(70,50) to start swipe from 70% in vertical axis to 50% of the screen size in vertical axis
     * and x axis by default is made to 50%(center)
     */

    async swipeUp(startPoint = swipePercentages.UP.fromY, endPoint = swipePercentages.UP.toY) {
        await this.swipePage(swipePercentages.UP.fromX, swipePercentages.UP.toX, startPoint, endPoint);
    }

    /**
     * Description  - This is the method to perform swipe UP operation until you see the element mentioned in locator.
     * @param {String} locator - denotes to swipe until you see the element in the page
     * @param {Number} numberOfSwipesToCheck - Denotes the number of swipe to make until you see the element in locator param
     * @param {Number} startPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * @param {Number} endPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * Usage - swipeUpToElement("//*[@id='Logout'], 2, 70, 50) to start swipe from 70% in vertical axis to 50% of the screen size in vertical axis
     * for utmost 2 times to search for the element with id "Logout" on the centre of the screen(X-axis)
     */

    async swipeUpToElement(locator: string, numberOfSwipesToCheck = 1, startPoint = swipePercentages.UP.fromY, endPoint = swipePercentages.UP.toY) {
        await this.swipeToElement(locator, numberOfSwipesToCheck, swipePercentages.UP.fromX, swipePercentages.UP.toX, startPoint, endPoint);
    }

    /**
     * Description  - This is the method to perform swipe DOWN operation.
     * @param {Number} startPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * @param {Number} endPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * Usage - swipeDown(50,70) to start swipe from 50% in vertical axis to 70% of the screen size in vertical axis
     */

    async swipeDown(startPoint = swipePercentages.DOWN.fromY, endPoint = swipePercentages.DOWN.toY) {
        await this.swipePage(swipePercentages.DOWN.fromX, swipePercentages.DOWN.toX, startPoint, endPoint);
    }

    /**
     * Description  - This is the method to perform swipe DOWN operation until you see the element mentioned in locator.
     * @param {String} locator - denotes to swipe until you see the element in the page
     * @param {Number} numberOfSwipesToCheck - Denotes the number of swipe to make until you see the element in locator param
     * @param {Number} startPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * @param {Number} endPoint - denotes percentage of y axis on the device from values 0 to 100 in vertical axis
     * Usage - swipeUpToElement("//*[@id='Logout'], 2, 50, 70) to start swipe from 50% in vertical axis to 70% of the screen size in vertical axis
     * for utmost 2 times to search for the element with id "Logout" on the centre of the screen(X-axis)
     */

    async swipeDownToElement(locator: any, numberOfSwipesToCheck = 1, startPoint = swipePercentages.DOWN.fromY, endPoint = swipePercentages.DOWN.toY) {
        await this.swipeToElement(locator, numberOfSwipesToCheck, swipePercentages.DOWN.fromX, swipePercentages.DOWN.toX, startPoint, endPoint);
    }

    /**
     * Description  - This is the method to perform swipe LEFT operation.
     * @param {Number} startPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * @param {Number} endPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * Usage - swipeLeft(70,50) to start swipe from 70% in horizontal axis to 50% of the screen size in horizontal axis
     */

    async swipeLeft(startPoint = swipePercentages.LEFT.fromX, endPoint = swipePercentages.LEFT.toX) {
        await this.swipePage(startPoint, endPoint, swipePercentages.LEFT.fromY, swipePercentages.LEFT.toY);
    }

    /**
     * Description  - This is the method to perform swipe LEFT operation until you see the element mentioned in locator.
     * @param {String} locator - denotes to swipe until you see the element in the page
     * @param {Number} numberOfSwipesToCheck - Denotes the number of swipe to make until you see the element in locator param
     * @param {Number} startPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * @param {Number} endPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * Usage - swipeLeftToElement("//*[@id='Logout'], 2, 70, 50) to start swipe from 70% in horizontal axis to 50% of the screen size in horizontal axis
     * for utmost 2 times to search for the element with id "Logout" on the centre of the screen(Y-axis)
     */

    async swipeLeftToElement(locator: any, numberOfSwipesToCheck = 1, startPoint = swipePercentages.LEFT.fromX, endPoint = swipePercentages.LEFT.toX) {
        await this.swipeToElement(locator, numberOfSwipesToCheck, startPoint, endPoint, swipePercentages.LEFT.fromY, swipePercentages.LEFT.toY);
    }

    /**
     * Description  - This is the method to perform swipe RIGHT operation.
     * @param {Number} startPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * @param {Number} endPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * Usage - swipeRight(50,70) to start swipe from 50% in horizontal axis to 70% of the screen size in horizontal axis
     */

    async swipeRight(startPoint = swipePercentages.RIGHT.fromX, endPoint = swipePercentages.RIGHT.toX) {
        await this.swipePage(startPoint, endPoint, swipePercentages.RIGHT.fromY, swipePercentages.RIGHT.toY);
    }
    

    /**
     * Description  - This is the method to perform swipe RIGHT operation until you see the element mentioned in locator.
     * @param {String} locator - denotes to swipe until you see the element in the page
     * @param {Number} numberOfSwipesToCheck - Denotes the number of swipe to make until you see the element in locator param
     * @param {Number} startPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * @param {Number} endPoint - denotes percentage of x axis on the device from values 0 to 100 in horizontal axis
     * Usage - swipeRightToElement("//*[@id='Logout'], 2, 50, 70) to start swipe from 50% in horizontal axis to 70% of the screen size in horizontal axis
     * for utmost 2 times to search for the element with id "Logout" on the centre of the screen(Y-axis)
     */

    async swipeRightToElement(locator: string, numberOfSwipesToCheck = 1, startPoint = swipePercentages.RIGHT.fromX, endPoint = swipePercentages.RIGHT.toX) {
        await this.swipeToElement(locator, numberOfSwipesToCheck, startPoint, endPoint, swipePercentages.RIGHT.fromY, swipePercentages.RIGHT.toY);
    }
}

export default new ActionHelper();