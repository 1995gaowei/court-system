import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import SPTS from '@/views/SPTS'
import YSSA from '@/views/YSSA'
import ESSA from '@/views/ESSA'
import YSJA from '@/views/YSJA'
import ESJA from '@/views/ESJA'
import AYFX from '@/views/AYFX'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/home',
      component: Hello
    },
    {
      path: '/spts',
      component: SPTS
    },
    {
      path: '/yssa',
      component: YSSA
    },
    {
      path: '/essa',
      component: ESSA
    },
    {
      path: '/ysja',
      component: YSJA
    },
    {
      path: '/esja',
      component: ESJA
    },
    {
      path: '/ayfx',
      component: AYFX
    }
  ]
})
