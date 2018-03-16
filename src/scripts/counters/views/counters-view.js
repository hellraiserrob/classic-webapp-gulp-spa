import { View } from 'backbone';
import $ from 'jquery';
import { debounce } from 'underscore';

import CounterList from '../collections/counters';
import CounterView from '../views/counter-view';

var counters = new CounterList();

export default View.extend({
  el: $('.todoapp'),
  events: {
    'click .add': 'add'
  },
  initialize: function () {
    this.$list = this.$el.find('.list');

    this.listenTo(counters, 'add', this.addOne);
    this.listenTo(counters, 'reset', this.addAll);
    this.listenTo(counters, 'all', debounce(this.render, 0));

    counters.fetch({ reset: true });
  },
  render: function () {
    // this.$el.html(this.template());
  },
  addOne: function (counter) {
    const view = new CounterView({ model: counter });
    this.$list.append(view.render().el);
  },
  addAll: function(){
    this.$list.html('');
		counters.each(this.addOne, this);
  },
  add: function () {
    counters.create({
      total: 0
    });
  }
});
