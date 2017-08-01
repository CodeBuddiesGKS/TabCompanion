import { TabCompanionPage } from './app.po';

describe('tab-companion App', () => {
  let page: TabCompanionPage;

  beforeEach(() => {
    page = new TabCompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
