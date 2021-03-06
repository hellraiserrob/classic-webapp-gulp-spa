import Vue from 'vue';
import $ from 'jquery';
import { history } from 'backbone';

import App from './todo-app/TodoApp.vue';
import Accordion from './modules/accordion';
import StyleSwitcher from './modules/style-switcher';
import ContactCard from './modules/contact-card';

import CountersApp from './counters/views/counters-view';
import CounterList from './counters/collections/counters';
import CountersRouter from './counters/routers/router';

const counters = new CounterList();

new CountersApp({
  collection: counters
});
new CountersRouter();

if(!history.started){
  history.start();
}

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

const cc = new ContactCard();
cc.init();

// accept replacement modules
if (module.hot) {
  module.hot.accept();
}
