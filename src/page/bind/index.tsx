
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Avatar, Menu, Tooltip } from 'antd'
import { GoogleOutlined, } from '@ant-design/icons'
import IconUserAvatar from '@img/user-avatar.svg';
import { ReactComponent as IconReturn } from '@img/return.svg'

import Bind from './bind'
import Success from './success'

import './index.less'


const { Header, Sider, Content } = Layout;

export default () => {
    const navgite = useNavigate();
    const [pass, setPass] = useState<boolean>(false)

    return (
        <Layout className='bind-layout'>
            <Sider width={240} className='main-side'>
                <h1 className='main-logo'>{config.logo}{process.env.REACT_APP_NAME}</h1>
                <Menu
                    defaultSelectedKeys={['/bind']}
                    className='main-menu'
                    mode="inline"
                >
                    <Menu.Item key="/bind" icon={<GoogleOutlined />}>
                        绑定谷歌认证
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className='main-body'>
                <Header className='main-header'>
                    <div className='left' />
                    <div className='right'>
                        <Tooltip title='返回登录' placement='left'>
                            <span className='return' onClick={() => navgite('/login')}>
                                <IconReturn />
                            </span>
                        </Tooltip>
                        <Tooltip title='用户名：Jsisaj' placement='left'>
                            <span className='user'>
                                <Avatar src={IconUserAvatar} />
                            </span>
                        </Tooltip>
                    </div>
                </Header>
                <Content className='main-content'>
                    <div className='bind-block'>
                        {
                            pass ? <Success /> : <Bind setPass={setPass} />
                        }
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}