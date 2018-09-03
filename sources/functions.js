const data = require('./data')
const selectors = require('./selectors')

const uiTest = (browser) => {
    browser
        .waitForElementPresent(selectors.logo, 10000)
}

module.exports = {
    uiTest: uiTest,

}