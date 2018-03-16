import { View } from 'backbone';

import CounterTemplate from '../../../templates/partials/counter.nunjucks';

export default View.extend({
  tagName: 'div',
  events: {
    'click button.add': 'inc',
    'click button.decrement': 'dec',
    'click button.break': 'break',
    'click h1': 'clear'
  },
  template: CounterTemplate,
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'invalid', this.error);
    
    this.render();
  },
  render: function () {
    this.$el.html(this.template.render(this.model.toJSON()));
    return this;
  },
  inc: function () {
    this.model.inc();
  },
  dec: function () {
    this.model.dec();
  },
  break: function () {
    this.model.save({
      total: 'broken',
      validate: true
    });
  },
  clear: function () {
    this.model.destroy();
  },
  error: function(model, error){
    console.log('error ' + model.get('total') + ' ' + error);
  }
});
