import { ShortbrainScrumPage } from './app.po';

describe('shortbrain-scrum App', () => {
  let page: ShortbrainScrumPage;

  beforeEach(() => {
    page = new ShortbrainScrumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
