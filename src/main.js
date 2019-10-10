// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'

NutUI.install(Vue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
