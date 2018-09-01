const functions = require('../sources/functions')

module.exports = {
    before: browser => {
    },
    after: browser => {
        browser.end

    },

    'homePageUI' : browser => {
        let homePageUI = browser.page.homePageUI();
        homePageUI.navigate()
        homePageUI.waitForElementVisible('@logo', 5000)
    },
}