const data = require('./data')
const selectors = require('./selectors')

const uiTest = (browser) => {
    browser
        .useXpath()
        .waitForElementVisible(selectors.logo, 5000)
        .waitForElementVisible(selectors.smallBusinesses, 5000)
        .waitForElementVisible(selectors.brokers, 5000)
        .waitForElementVisible(selectors.enterprise, 5000)
        .waitForElementVisible(selectors.services, 5000)
        .waitForElementVisible(selectors.resources, 5000)
        .waitForElementVisible(selectors.contactUs, 5000)
        .useCss()
        .waitForElementVisible(selectors.logIn, 5000)
        .waitForElementVisible(selectors.getStarted, 5000)
        .useXpath()
        .waitForElementVisible(selectors.optimized, 5000)
        .expect.element(selectors.optimized).text.to.equal('Your Business. Optimized.')
    browser
        .useXpath()
        .waitForElementVisible(selectors.learnMore, 5000)
        
}

module.exports = {
    uiTest: uiTest,

}