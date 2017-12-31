// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// this.$http.post('/api/checkOrder', {
// orderId: this.orderId
// })
// .then((res) => {
// this.isShowSuccessDialog = true
// this.$emit('on-close-check-dialog')
// }, (err) => {
// this.isShowFailDialog = true
// this.$emit('on-close-check-dialog')
// })

// this.$http.post('/api/checkOrder', {
// orderId: this.orderId
// })
// .then((res) => {
// this.isShowSuccessDialog = true
// this.$emit('on-close-check-dialog')
// }, (err) => {
// this.isShowFailDialog = true
// this.$emit('on-close-check-dialog')
// })