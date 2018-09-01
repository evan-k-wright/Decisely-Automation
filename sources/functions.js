const homePageUI = (browser) => {
    let homePageUI = broswer.page.homePageUI
    homePageUI.navigate()
        homePageUI
            .waitForElementVisible('@logo', 5000)
            .waitForElementVisible('@smallBusinesses', 5000)
}

module.exports = {
    homePageUI : homePageUI,
    
}