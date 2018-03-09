import Vue from 'vue';
import $ from 'jquery';

import App from './todo-app/TodoApp.vue';
import Accordion from './modules/accordion';
import StyleSwitcher from './modules/style-switcher';
import Hello from './modules/hello';

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

const hello = new Hello();
hello.init();

// accept replacement modules
if (module.hot) {
  module.hot.accept();
}
