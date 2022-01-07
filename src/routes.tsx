import { Outlet } from 'react-router-dom';
import { UserOutlined, DesktopOutlined, MessageOutlined, } from '@ant-design/icons'
import Auth from '@com/auth'
import Layout from '@page'

import Login from '@page/login'
import Bind from '@page/bind'
import User from '@page/user'

import Error404 from '@page/404'

const routes = [
  // 公共路由
  { path: '/login', element: <Login /> },
  { path: '/bind', element: <Bind /> },

  // 需要登陆访问路由
  /**
   * path     react router path 路由path 由于path使用相对路由. 所以 path , match无法共享
   * match    antd menus 组件 default selectedKey openKey命中 规则 
   * url      菜单 menu link to url 跳转地址
   */
  {
    path: '/',
    element: <Auth><Layout /></Auth>,
    menu: true,
    children: [
      {
        title: '账号管理',
        path: 'user/*',
        match: '/user/*',
        url: '/user',
        element: <User />,
        icon: <UserOutlined />,
      },
      // {
      //   title: '邮箱',
      //   path: 'email/*',
      //   match: '/email/*',
      //   url: '/email',
      //   element: <Outlet />,
      //   icon: <DesktopOutlined />,
      //   children: [
      //     {
      //       title: '收件箱',
      //       index: true,
      //       match: '/email',
      //       url: '/email/',
      //       element: <Email />,
      //     },
      //     {
      //       title: '添加邮件',
      //       path: 'add',
      //       match: '/email/add/*',
      //       url: '/email/add',
      //       element: <EmailAdd />,
      //     },
      //   ],
      // },
    ],
  },

  { path: '*', element: <Error404 /> },
]

const menus: any[] = (routes.find(it => it.menu) as any).children;
const menusFlat: any[] = menus.reduce((a: any[], b: Obj) => a.concat(b).concat(b.children || []), []);

export default routes;
export { menus, menusFlat }

