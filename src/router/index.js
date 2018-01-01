import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';
import ElementDemo from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUIDemo from '@/components/ElementUIDemo'
import AddDemo from '@/components/AddDemo'
import HelloWorld from '@/components/HelloWorld'

//内部引用
Vue.use(ElementDemo)
Vue.use(AddDemo)

//第三方引用
Vue.use(Router)
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
      path: '/addPart',
      name: 'AddDemo',
      component: AddDemo
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
