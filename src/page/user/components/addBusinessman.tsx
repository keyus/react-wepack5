import { useState, useRef, useCallback } from 'react'
import { Form, Modal, Radio, Input, Switch, message } from 'antd';

/**
 * 添加商户
 */
interface Props {
    visible: boolean,
    onCancel: () => void,
}
export default function AddBusinessman(props: Props) {
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
            title='添加商户'
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
                    label='内部/外部'>
                    <Radio.Group>
                        <Radio value={1}>内部</Radio>
                        <Radio value={2}>外部</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name='name'
                    rules={[
                        { required: true, message: '请输入商户名称' },
                        { pattern: util.reg.numberEnZh, message: '请输入2-8个字符' }
                    ]}
                    label='商户名称'>
                    <Input
                        placeholder='请输入2-8个字符' maxLength={8} />
                </Form.Item>
                <Form.Item
                    name='money'
                    tooltip='预付款必须小于商户的充提差额'
                    validateFirst
                    rules={[
                        { required: true, message: '请输入内容' },
                        { pattern: util.reg.number, message: '预付款输入有误'},
                        {
                            validator: (_, value) => {
                                if (Number(value) > 20000000) {
                                    return Promise.reject('金额不能大于2千万')
                                }
                                return Promise.resolve();
                            }
                        },
                    ]}
                    label='预付款'>
                    <Input
                        placeholder='请输入正整数' maxLength={10} />
                </Form.Item>
                <Form.Item
                    name='isFreeze'
                    rules={[
                        { required: true, message: '请输入内容' },
                    ]}
                    extra='冻结后该商户的玩家不能使用b2b房产中介功能'
                    label='冻结商户'>
                    <Switch checkedChildren="是" unCheckedChildren="否" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
