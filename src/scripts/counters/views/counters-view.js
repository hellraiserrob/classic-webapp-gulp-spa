import { View } from 'backbone';
import $ from 'jquery';
import { debounce } from 'underscore';

// import CounterList from '../collections/counters';
import CounterView from '../views/counter-view';

import ev from '../events/events';

// const counters = new CounterList();

export default View.extend({
  el: $('.todoapp'),
  events: {
    'click .add': 'add'
  },
  initialize: function () {
    this.$list = this.$el.find('.list');

    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'filter', this.filterAll);
    this.listenTo(this.collection, 'all', debounce(this.render, 0));
    ev.on('filter', this.filterAll.bind(this));

    this.collection.fetch({ reset: true });
  },
  render: function () {
    this.$('.filters li a')
      .removeClass('active')
      .filter('[href="#/' + (global.countersFilter || '') + '"]')
      .addClass('active');

    return this;
  },
  addOne: function (counter) {
    const view = new CounterView({ model: counter });
    this.$list.append(view.render().el);
  },
  addAll: function(){
    this.$list.html('');
		this.collection.each(this.addOne, this);
  },
  add: function () {
    this.collection.create({
      total: 0
    });
  },
  filterOne: function (counter) {
    counter.trigger('visible');
  },
  filterAll: function () {
    this.collection.each(this.filterOne, this);
  },
});
