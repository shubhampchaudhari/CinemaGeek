import { BookMyShowPage } from './app.po';

describe('book-my-show App', () => {
  let page: BookMyShowPage;

  beforeEach(() => {
    page = new BookMyShowPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
