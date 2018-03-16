import { Model } from 'backbone';

export default Model.extend({
  defaults: {
    total: 0
  },
  validate: function (attr) {
    if (!Number.isInteger(attr.total)) {
      return 'this is not a number';
    }
  },
  initialize: function () {
  },
  inc: function () {
    this.save({
      total: this.get('total') + 1
    });
  },
  dec: function () {
    this.save({
      total: this.get('total') - 1
    });
  }
});
