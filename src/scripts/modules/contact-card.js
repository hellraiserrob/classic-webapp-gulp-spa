import $ from 'jquery';

import template from '../../templates/partials/contact-card.nunjucks';

export default class Hello {
  init() {
    this.render();
  }
  render() {
    const model = { 
      username: 'hellraiser',
      name: 'Rob Phillips',
      hobbies: ['Running', 'Rugby', 'Cycling']
    };
    const html = template.render(model);
    $('#contact').html(html);
  }
}
