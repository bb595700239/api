import Vue from 'vue'
import Router from 'vue-router'

const detail = r => require.ensure([], () => r(require('../page/detail')), 'detail')
const list = r => require.ensure([], () => r(require('../page/list')), 'list')
const cart = r => require.ensure([], () => r(require('../page/cart')), 'cart')
const user = r => require.ensure([], () => r(require('../page/user')), 'user')
const userau = r => require.ensure([], () => r(require('../page/user-au')), 'userau')
const orderList = r => require.ensure([], () => r(require('../page/orderList')), 'orderList')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/au'
    },
    {
      path: '/detail',
      name: 'detail',
      meta: { norequiresAuth: true },
      component: detail
    },
    {
      path: '/list',
      name: 'list',
      meta: { norequiresAuth: true },
      component: list
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/au',
      name: 'userau',
      meta: { norequiresAuth: true },
      component: userau
    },
    {
      path: '/user',
      name: 'user',
      component: user,

    }, {
      path: '/order',
      name: 'orderList',
      component: orderList,
      meta: { nokeepAlive: true },
      children: []
    }

  ]
})
