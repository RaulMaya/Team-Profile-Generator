const Header = require('../lib/header.js');

describe('Header', () => {
  test('should render header with the date', () => {
    const expectedHtml =
        `<header class="two alt-two"><h1>Paris St. Germain<span>Starting 7</span></h1></header>`
    const header = new Header('Paris St. Germain');
    expect(header.render()).toEqual(expectedHtml);
  });
});
