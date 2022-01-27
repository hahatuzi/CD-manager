/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

export default {
  path: '/leaveManage',
  component: Layout,
  redirect: '/leaveManage/selfLeave',
  name: 'leaveManage',
  meta: {
    title: '请假管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'selfLeave',
      component: () => import('@/views/leaveManage/selfLeave'), // Parent router-view
      name: 'selfLeave',
      meta: { title: '个人请假' }
    },
    {
      path: 'teamLeave',
      name: 'teamLeave',
      component: () => import('@/views/leaveManage/teamLeave'),
      meta: { title: '集体请假' }
    },
    {
      path: 'remainQuery',
      name: 'remainQuery',
      component: () => import('@/views/leaveManage/remainQuery'),
      meta: { title: '假期余额' }
    }
  ]
}

