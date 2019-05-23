import { AngularNotesPage } from './app.po';

describe('angular-notes App', function() {
  let page: AngularNotesPage;

  beforeEach(() => {
    page = new AngularNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
