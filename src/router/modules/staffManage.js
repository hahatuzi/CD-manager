/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

export default {
  path: '/staffManage',
  component: Layout,
  redirect: '/staffManage/departmentInfo',
  name: 'staffManage',
  meta: {
    title: '员工及部门管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'departmentInfo',
      component: () => import('@/views/staffManage/departmentInfo'), // Parent router-view
      name: 'departmentInfo',
      meta: { title: '部门详情' }
    },
    {
      path: 'selfInfo',
      name: 'selfInfo',
      component: () => import('@/views/staffManage/selfInfo'),
      meta: { title: '员工个人详情' }
    },
    {
      path: 'staffBaseInfo',
      name: 'staffBaseInfo',
      component: () => import('@/views/staffManage/staffBaseInfo'),
      meta: { title: '员工基本信息' }
    },
    {
      path: 'salaryInfo',
      name: 'salaryInfo',
      component: () => import('@/views/staffManage/salaryInfo'),
      meta: { title: '员工薪酬信息' }
    }
  ]
}

