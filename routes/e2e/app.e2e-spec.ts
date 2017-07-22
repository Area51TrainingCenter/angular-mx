import { RoutesPage } from './app.po';

describe('routes App', () => {
  let page: RoutesPage;

  beforeEach(() => {
    page = new RoutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
