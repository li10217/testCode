import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component: HelloWorld
    }
  ]
})
