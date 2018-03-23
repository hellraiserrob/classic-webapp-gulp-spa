import { View } from 'backbone';
import $ from 'jquery';
// import { debounce } from 'underscore';

import UserView from './user-view';

export default View.extend({
  el: $('#users'),
  events: {
    'click .reset': 'filter',
    'submit .addform': 'add',
    'submit .filterform': 'filter'
  },
  template: function(){
    return `
      <form class="mb15 filterform">
        <p>
          <input type="text" class="form-control filter" placeholder="Enter a filter" />
        </p>
      </form>
      <div class="list mb15">list content...</div>
      <form class="mb15 addform">
        <p>
          <input type="text" class="form-control name" placeholder="Enter a name..." />
        </p>
        <button type="submit" class="btn btn-sm add">Add</button>
      </form>
      <button class="btn btn-sm btn-danger reset">Fetch</button>
      <div class="loading">loading...</div>
    `;
  },
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    // this.listenTo(this.collection, 'all', debounce(this.render, 0));
    // this.listenTo(this.collection, 'request', this.startLoading);
    // this.listenTo(this.collection, 'sync', this.stopLoading);
    
    this.render();
    this.$name = this.$el.find('.name');
    this.$filter = this.$el.find('.filter');
    this.fetch();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  addOne: function (user) {
    const view = new UserView({ model: user });
    this.$el.find('.list').append(view.render().el);
  },
  addAll: function(){   
    this.$el.find('.list').html('');
		this.collection.each(this.addOne, this);
  },
  add: function (e) {
    e.preventDefault();

    let name = this.$name.val();

    if(name.trim().length > 0) {
      this.startLoading();
      this.collection.create({
        name
      }, {
        success: function(){
          console.log('fin');
          this.stopLoading();
          this.$name.val('');
        }.bind(this)
      });
    }

    return false;
  },
  filter: function(e) {
    e.preventDefault();
    this.fetch();
  },
  startLoading: function() {
    this.$el.find('.loading').show();
  },
  stopLoading: function() {
    this.$el.find('.loading').hide();
  },
  fetch: function() {
    const filter = {};

    if(this.$filter.val() !== ''){
      filter.id = this.$filter.val();
    }

    this.startLoading();

    this.collection.fetch({ 
      reset: true,
      data: $.param(filter),
      success: function() {
        this.stopLoading();
      }.bind(this)
    });
  }
});
