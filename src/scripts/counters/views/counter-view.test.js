import Counter from '../models/counter';
import CounterView from './counter-view';

describe('Counter View', () => {

  let counter;
  let view;
  
  beforeEach(() => {
    counter = new Counter();
    view = new CounterView({
      model: counter
    });
  });

  it('Renders a div tag', () => {
    // console.log(view.render().$el.html());
    expect(view.el.tagName).toEqual('DIV');
  });

  it('Contains zero for default', () => {
    expect(view.render().$el.html()).toContain('<h1>0</h1>');
  });
  
  it('Inc adds', () => {
    counter.set({total: 100});
    expect(view.render().$el.html()).toContain('<h1>100</h1>');
  });


  
});
