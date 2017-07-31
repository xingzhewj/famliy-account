import Vue from 'vue'
import Router from 'vue-router'
import SumAccount from '@/components/SumAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SumAccount',
      component: SumAccount
    }
  ]
})
