
import { useState, useRef, useCallback } from 'react'
import { Form, Modal, Input, message } from 'antd';

/**
 * 重置密码
 */
interface Props {
    visible: boolean,
    onCancel: () => void,
}
export default function ResetPassword(props: Props) {
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
            title='重置密码'
            destroyOnClose
            confirmLoading={loading}
            visible={visible}
            width={400}
            maskClosable={false}
            onOk={() => form.current.submit()}
            onCancel={onCancel}
        >
            <Form
                ref={form}
                labelCol={{ span: 6 }}
                onFinish={onFinish}
                initialValues={{

                }}
                wrapperCol={{ span: 17 }}>
                <Form.Item
                    name='password'
                    validateFirst
                    rules={[
                        { required: true, message: '请输入密码' },
                        { min: 8, message: '密码最少8位字符' },
                        { pattern: util.reg.password, message: '格式不符' }
                    ]}
                    label='输入密码'>
                    <Input
                        placeholder='请输入密码' maxLength={16} />
                </Form.Item>
                <Form.Item
                    dependencies={['password']}
                    name='confirmpassword'
                    rules={[
                        { required: true, message: '请再次输入密码' },
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
                        placeholder='请再次输入密码' maxLength={16} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

