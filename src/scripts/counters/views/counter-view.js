import { View } from 'backbone';

import CounterTemplate from '../../../templates/partials/counter.nunjucks';

export default View.extend({
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
    this.listenTo(this.model, 'visible', this.toggle);
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
  },
  toggle: function () {
    const hide = this.isHidden();

    if(hide){
      this.$el.slideUp();
    }
    else {
      this.$el.slideDown();
    }
    // this.$el.toggleClass('hidden', hide);
  },
  isHidden: function () {
    const value = this.model.get('total');

    if(window.countersFilter === 'positive' && value < 0){
      return true;
    }
    if(window.countersFilter === 'negative' && value >= 0){
      return true;
    }

    return false;
  },
});
