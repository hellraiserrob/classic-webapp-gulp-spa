import Counter from '../models/counter';
import SimpleView from './simple-view';

describe('Counter Viwe', () => {

  let counter;
  let view;
  const action = jest.fn();

  SimpleView.prototype.clear = action;

  beforeEach(() => {
    counter = new Counter();
    view = new SimpleView({
      model: counter
    });
  });

  it('Renders a div tag', () => {
    expect(view.el.tagName).toEqual('DIV');
  });
  
  it('Renders a h1', () => {
    expect(view.render().$el.find('h1').length).toEqual(1);
  });
  
  it('Renders a 0 to start', () => {
    expect(view.render().$el.find('h1').text()).toEqual('0');
  });
  
  it('H1 is clicked', () => {   
    view.render().$el.find('h1').click();
    expect(view.clear).toHaveBeenCalled();
  }); 

  it('Total in incremented', () => {
    counter.set({ total: 100 });
    expect(view.render().$el.find('h1').text()).toEqual('100');
  }); 

});
