import { NgofficePage } from './app.po';

describe('ngoffice App', () => {
  let page: NgofficePage;

  beforeEach(() => {
    page = new NgofficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
