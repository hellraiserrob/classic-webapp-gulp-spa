import { Router } from 'backbone';

import ev from '../events/events';

export default Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function (param) {
    window.countersFilter = param || '';
    ev.trigger('filter', param);
  }
});
