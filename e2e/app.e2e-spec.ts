import { Ng2DndTrackerPage } from './app.po';

describe('ng2-dnd-tracker App', function() {
  let page: Ng2DndTrackerPage;

  beforeEach(() => {
    page = new Ng2DndTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
