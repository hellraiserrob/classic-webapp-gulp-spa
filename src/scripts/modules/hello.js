import $ from 'jquery';

import template from '../../templates/partials/hello.nunjucks';

export default class Hello {
  init() {
    this.render();
  }
  render() {
    const model = { username: 'Rob' };
    const html = template.render(model);
    $('#hello').html(html);
  }
}
