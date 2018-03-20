import { history } from 'backbone';
import Router from './router';

describe('Counter View', () => {

  const trigger = { trigger: true };
  let router;

  beforeEach(() => {
    Router.prototype.setFilter = jest.fn();
    Router.prototype.test = jest.fn();

    history.stop();
    router = new Router();
    history.start();
    
  });

  it('Calls set filter', () => {
    expect(router.setFilter).toHaveBeenCalled();
  });

  it('Calls set filter with param', () => {
    router.navigate('/test/joe', trigger);
    expect(router.test).toHaveBeenCalled();
  });

});
