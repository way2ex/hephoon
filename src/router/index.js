import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/index/Hello'
import UV from '@/components/uv/UV'
import JIGUANG from '@/components/jiguang/JiGuang'
import UVDetail from '@/components/uv/UVDetail'
import About from '@/components/about/about'
import Contact from '@/components/contact/contact'

import UV1 from '@/components/uv/UV1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/uv',
      name: 'UV',
      component: UV,
      children: [
        {
          path: '3',
          component: UV1
        }
      ]
    },
    {
      path: '/jiguang',
      name: 'jiguang',
      component: JIGUANG
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/uv-detail/:classtype/:url',  // :classtype/:url
      name: 'uv-detail',
      component: UVDetail
    }
  ]
})
