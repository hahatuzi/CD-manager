
import Layout from '@/layout'

export default {
  path: '/setting',
  component: Layout,
  redirect: '/setting/attendRule',
  name: 'setting',
  alwaysShow: true,
  meta: {
    title: '系统配置',
    icon: 'nested'
  },
  children: [
    {
      path: 'attendRule',
      name: 'attendRule',
      component: () => import('@/views/setting/attendRule'),
      meta: { title: '考勤规则设置' }
    }
  ]
}

