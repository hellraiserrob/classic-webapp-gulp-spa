import { View } from 'backbone';

export default View.extend({
  events: {
    'click button': 'clear',
  },
  template: function(model){
    return `
      <div>
        ${model.name}
        <button class="btn btn-naked">(x)</button>
      </div>
    `;

  },
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    // this.listenTo(this.model, 'visible', this.toggle);
    this.listenTo(this.model, 'invalid', this.error);
    
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  
  clear: function () {
    this.model.destroy();
  },
  error: function(model, error){
    console.log('error ' + model.get('name') + ' ' + error);
  },
  
});
