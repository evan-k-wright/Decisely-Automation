const data = require('./data')
const selectors = require('./selectors')

const uiTest = (browser) => {
    browser
        .useXpath()
        .waitForElementVisible(selectors.logo, 5000)
        .waitForElementVisible(selectors.smallBusinesses, 5000)
}

module.exports = {
    uiTest: uiTest,

}