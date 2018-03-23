import { Model } from 'backbone';

export default Model.extend({
  defaults: {
    name: ''
  },
  validate: function (attr) {
    if (attr.name === '') {
      return 'A name must be set';
    }
  },
  initialize: function () {
  }
});
