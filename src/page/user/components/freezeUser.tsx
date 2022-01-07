
import { useState, useRef, useCallback } from 'react'
import { Form, Modal, Input, Typography, message } from 'antd';

/**
* 冻结账号
*/
interface Props {
    visible: boolean,
    onCancel: () => void,
}
export default function FreezeUser(props: Props) {
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
            title={
                <div>
                    冻结账号
                    <Typography.Text type="secondary" style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        marginLeft: '15px'
                    }}>冻结后所有订单会转移给承接账号</Typography.Text>
                </div>
            }
            destroyOnClose
            width={500}
            confirmLoading={loading}
            visible={visible}
            maskClosable={false}
            onOk={() => form.current.submit()}
            onCancel={onCancel}
        >

            <Form
                ref={form}
                labelCol={{ span: 7}}
                onFinish={onFinish}
                initialValues={{
                    isfen: false,
                }}
                wrapperCol={{ span: 15 }}>
                <Form.Item
                    name='name'
                    rules={[
                        { required: true, message: '请输入账号' },
                        { pattern: util.reg.numberEnZh, message: '账号输入有误' }
                    ]}
                    label='承接订单账号'>
                    <Input
                        placeholder='请输入账号' maxLength={20} />
                </Form.Item>
            </Form>
        </Modal>
    )
}
