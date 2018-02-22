import Vue from 'vue';
import $ from 'jquery';

import App from './App.vue';
import Accordion from './modules/accordion';
import StyleSwitcher from './modules/style-switcher';

Vue.config.productionTip = false;

if ($('#app').length > 0) {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}

const accord = new Accordion();
accord.init();

const styleSwitcher = new StyleSwitcher();
styleSwitcher.init();

// accept replacement modules
if (module.hot) {
  module.hot.accept();
}
