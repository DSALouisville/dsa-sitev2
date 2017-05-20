module.exports = {
  'App loads at correct url' : function (browser) {
    browser
      .url(browser.globals.APP_URL)
      .waitForElementVisible('body', 1000);
    browser.expect.element('body').text.to.contain('Get Involved');
    browser.end();
  }

  'Menu bar links work' : function (browser) {
    browser.url(browser.globals.APP_URL);
    browser.pause(1000);
    browser.element('a[href="blog"]').click();
    browser.pause(1000);
    browser.expect.element('body').text.to.contain('Get Involved');

  }
};
