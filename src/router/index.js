import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';
import ElementDemo from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUIDemo from '@/components/ElementUIDemo'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(ElementDemo)
Vue.use(ElementUIDemo)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElementUIDemo',
      component: ElementUIDemo
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
