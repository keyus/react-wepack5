
import { useState, useRef, useCallback } from 'react'
import { Form, Modal, Radio, Input, Typography, Select, message } from 'antd';

/**
 * 添加账号
 * 各权限通用
 */
interface Props {
    visible: boolean,
    onCancel: () => void,
}
export default function AddUser(props: Props) {
    const {
        visible,
        onCancel,
    } = props;
    const [loading, setLoading] = useState(false);
    const form: any = useRef();

    const onFinish = useCallback(async (values) => {
        setLoading(true);
        try {
            await http.post('/index/add/notice', values);
            setLoading(false);
            onCancel();
            message.success('添加成功');
        } catch {
            setLoading(false);
        }
    }, []);

    return (
        <Modal
            title='添加账号'
            destroyOnClose
            confirmLoading={loading}
            visible={visible}
            maskClosable={false}
            onOk={() => form.current.submit()}
            onCancel={onCancel}
        >

            <Form
                ref={form}
                labelCol={{ span: 5 }}
                onFinish={onFinish}
                initialValues={{
                    type: 1,
                    isFreeze: false,
                }}
                wrapperCol={{ span: 18 }}>
                <Form.Item
                    name='type'
                    label='角色'>
                    <Radio.Group>
                        <Radio value={1}>商户管理员</Radio>
                        <Radio value={2}>审核admin</Radio>
                        <Radio value={3}>值班</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="商户"
                    name='sh'
                    rules={[{ required: true, message: '请选择商户' }]}>
                    <Select
                        placeholder='请选择商户'>
                        <Select.Option value={'1'}>百主地</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="权限"
                    name='role'
                    rules={[{ required: true, message: '请选择权限' }]}>
                    <Select
                        placeholder='请选择权限'>
                        <Select.Option value={'1'}>百主地</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='username'
                    rules={[
                        { required: true, message: '请输入账号' },
                        { pattern: util.reg.numberEnZh, message: '请输入6-20位字母或数字' }
                    ]}
                    label='账号'>
                    <Input
                        placeholder='6-20位字母或数字' maxLength={20} />
                </Form.Item>
                <Form.Item
                    name='nickname'
                    rules={[
                        { required: true, message: '请输入昵称' },
                    ]}
                    label='昵称'>
                    <Input
                        placeholder='最多16个字符' maxLength={16} />
                </Form.Item>
                <Form.Item
                    name='password'
                    validateFirst
                    rules={[
                        { min: 8, message: '密码最少8位字符' },
                        { pattern: util.reg.password, message: '格式不符' }
                    ]}
                    label='密码'>
                    <Input
                        placeholder='（选填）请输入8-16位密码' maxLength={16} />
                </Form.Item>
                <Form.Item
                    dependencies={['password']}
                    name='confirmpassword'
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                const password = getFieldValue('password');
                                if (password !== value) return Promise.reject(new Error('两次输入密码不一致'));
                                return Promise.resolve();
                            },
                        })
                    ]}
                    label='确认密码'>
                    <Input
                        placeholder='（选填）请输入8-16位确认密码' maxLength={16} />
                </Form.Item>
                <Typography.Text type="secondary" style={{ paddingLeft: '30px' }}>* 未输入密码则随机获取一组密码</Typography.Text>
            </Form>
        </Modal>
    )
}

