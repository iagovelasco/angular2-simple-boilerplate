import { Angular2SimpleBoilerplatePage } from './app.po';

describe('angular2-simple-boilerplate App', () => {
  let page: Angular2SimpleBoilerplatePage;

  beforeEach(() => {
    page = new Angular2SimpleBoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
