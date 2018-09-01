module.exports = {
    url: 'https://www.decisely.com',
    elements: {
        logo: {
            selector: '(//img[@alt="Decisely Logo"])[1]',
            locateStrategy: 'xpath'
        },

        smallBusinesses: {
            selector: '(//a[@class="nav-link"])[1]',
            locateStrategy: 'xpath'
        },

    }
}