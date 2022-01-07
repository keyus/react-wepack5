import { useState } from 'react';
import { Form, Input, Button,Typography } from 'antd';
import { UnlockOutlined, UserOutlined, DribbbleOutlined } from '@ant-design/icons'
import { useAuth } from '@com/auth'
import './index.less'

const { Title } = Typography;
const Login = () => {
    const auth = useAuth();
    const [visible, setVisible] = useState(false)
    const onFinish = async (values: any) => {
        console.log('Success login:', values);
        // http is global const has get and post method
        // const res = await http.get('/query4', {
        //     shouji: '1580281/=+6160',
        //     appkey: '467',
        // })
        auth.signin({ username: 'stringss' })
    };

    return (
        <div className='login-block'>
            <div className='login-logo'>
                <h1>
                    {config.logo}
                </h1>
                <h2>{process.env.REACT_APP_NAME}</h2>
            </div>
            <Form
                name="basic"
                className='login-form'
                onFinish={onFinish}
            >
                <Form.Item
                    className='form-item'
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input
                        size='large'
                        prefix={<UserOutlined />}
                        placeholder='用户名' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password
                        size='large'
                        prefix={<UnlockOutlined />}
                        placeholder='密码' />
                </Form.Item>

                {
                    visible &&
                    <Form.Item
                        name="code"
                        className='form-item'
                        rules={[{ required: true, message: '请输入验证码' }]}
                    >
                        <Input
                            size='large'
                            prefix={<DribbbleOutlined />}
                            placeholder='请输入验证码' />
                    </Form.Item>
                }

                <Form.Item className='form-submit'>
                    <Button
                        className='submit-btn'
                        type="primary"
                        size='large'
                        htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;