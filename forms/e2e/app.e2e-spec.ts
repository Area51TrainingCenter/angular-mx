import { FormsPage } from './app.po';

describe('forms App', () => {
  let page: FormsPage;

  beforeEach(() => {
    page = new FormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
