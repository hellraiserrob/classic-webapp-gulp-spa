import { View } from 'backbone';

export default View.extend({
  events: {
    'click button.add': 'inc',
    'click button.decrement': 'dec',
    'click button.break': 'break',
    'click h1': 'clear'
  },
  template: function(model){
    return `
      <div>
        <h1>${model.total}</h1>
        click: ${this.clicked}
      </div>`;
  },    
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggle);
    this.listenTo(this.model, 'invalid', this.error);
    this.clicked = 0;
    
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
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
    // this.model.destroy();
    this.clicked += 1;
    this.render();
  },
});
