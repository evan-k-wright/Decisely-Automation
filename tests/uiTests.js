const functions = require('../sources/functions')

module.exports = {
    before: browser => {
        browser.url('https://www.decisely.com/')
    },

    after: browser => {
        browser.end()

    },

}