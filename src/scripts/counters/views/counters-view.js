import { View } from 'backbone';
import $ from 'jquery';
import { debounce } from 'underscore';

import CounterList from '../collections/counters';
import CounterView from '../views/counter-view';

import ev from '../events/events';

const counters = new CounterList();

export default View.extend({
  el: $('.todoapp'),
  events: {
    'click .add': 'add'
  },
  initialize: function () {
    this.$list = this.$el.find('.list');

    this.listenTo(counters, 'add', this.addOne);
    this.listenTo(counters, 'reset', this.addAll);
    this.listenTo(counters, 'filter', this.filterAll);
    this.listenTo(counters, 'all', debounce(this.render, 0));
    ev.on('filter', this.filterAll.bind(this));

    counters.fetch({ reset: true });
  },
  render: function () {
    this.$('.filters li a')
      .removeClass('active')
      .filter('[href="#/' + (global.countersFilter || '') + '"]')
      .addClass('active');
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
  },
  filterOne: function (counter) {
    counter.trigger('visible');
  },
  filterAll: function () {
    counters.each(this.filterOne, this);
  },
});
