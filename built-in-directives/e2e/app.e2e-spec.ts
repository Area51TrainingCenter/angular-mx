import { BuiltInDirectivesPage } from './app.po';

describe('built-in-directives App', () => {
  let page: BuiltInDirectivesPage;

  beforeEach(() => {
    page = new BuiltInDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
