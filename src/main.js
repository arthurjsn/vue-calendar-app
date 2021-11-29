import Vue from 'vue';
import App from './App.vue';

import datePicker from 'vue-bootstrap-datetimepicker';
Vue.use(datePicker);

new Vue({
  render: h => h(App)
}).$mount('#app')