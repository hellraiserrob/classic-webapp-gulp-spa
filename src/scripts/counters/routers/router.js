import { Router } from 'backbone';

import ev from '../events/events';

export default Router.extend({
  routes: {
    '(:filter)': 'setFilter',
    'test/:name': 'test'
  },
  setFilter: function (param) {
    window.countersFilter = param || '';
    ev.trigger('filter', param);
  },
  test: function(name) {
    console.log('hello ' + name);
  }
});
