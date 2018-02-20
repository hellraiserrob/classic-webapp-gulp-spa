import { shallow } from '@vue/test-utils';
import MyButton from '../../src/scripts/components/Btn.vue';

describe('Btn.vue', () => {
  
  let wrapper;
  const label = 'new message';
  const action = jest.fn();

  beforeEach(() => {
    wrapper = shallow(MyButton, {
      slots: {
        default: label,
      },
      propsData: {
        action,
      }
    });
  });

  it('renders label when passed in default slot', () => {
    expect(wrapper.text()).toMatch(label);
  });

  it('action props should be called on click', () => {
    wrapper.trigger('click');
    expect(action).toHaveBeenCalled();
  });
  
  it('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

});
