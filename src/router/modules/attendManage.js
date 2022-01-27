/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

export default {
  path: '/attendManage',
  component: Layout,
  redirect: '/attendManage/selfAttend',
  name: 'attendManage',
  alwaysShow: true,
  meta: {
    title: '考勤管理',
    icon: 'nested'
  },
  children: [
    // {
    //   path: 'selfAttend',
    //   name: 'selfAttend',
    //   component: () => import('@/views/attendManage/selfAttend'), // Parent router-view
    //   meta: { title: '个人考勤详情' }
    //   // redirect: '/leaveManage/menu1/menu1-1'
    // },
    {
      path: 'attendRecord',
      name: 'attendRecord',
      component: () => import('@/views/attendManage/attendRecord'),
      meta: { title: '考勤记录管理' }
    }
    // {
    //   path: 'attendRule',
    //   name: 'attendRule',
    //   component: () => import('@/views/attendManage/attendRule'),
    //   meta: { title: '考勤规则设置' }
    // }
  ]
}

