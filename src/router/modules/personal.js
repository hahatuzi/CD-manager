/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

export default {
  path: '/personal',
  component: Layout,
  // redirect: '/personal/index',
  name: 'personal',
  // alwaysShow: true,
  // meta: {
  //   title: '个人中心',
  //   icon: 'nested'
  // }
  children: [
    {
      path: 'index',
      component: () => import('@/views/personal/index'),
      name: 'personal',
      meta: { title: '个人中心', icon: 'nested', affix: true }
    }
  ]
}

