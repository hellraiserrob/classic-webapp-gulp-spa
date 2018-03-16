import Counter from './counter';

describe('Counter Model', () => {

  let counter;

  beforeEach(() => {
    counter = new Counter();
  });

  it('Model has a specific default value', () => {
    expect(counter.get('total')).toEqual(0);
  });

  it('Model can set a new value', () => {
    counter.set('total', 100);
    expect(counter.get('total')).toEqual(100);
  });

});
