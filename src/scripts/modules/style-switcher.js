import $ from 'jquery';

export default class StyleSwitcher {
  init() {
    console.log('sw init');

    $('.style-switcher button').off().on('click', this.switch.bind(this));
  }

  switch(e){
    const a = $(e.target);
    const theme = a.attr('data-theme');
    
    $('link').attr('href', `/css/${theme}.css`);

    // console.log(this);
    return false;
  }
}
