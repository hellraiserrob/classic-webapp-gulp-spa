import Vue from 'vue';
import $ from 'jquery';

import App from './App.vue';
import Accordion from './accordion';

Vue.config.productionTip = false;

if ($('#app').length > 0) {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}

const accord = new Accordion();
accord.init();

// accept replacement modules
if (module.hot) {
  module.hot.accept();
}
