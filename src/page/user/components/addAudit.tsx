
 import { useState, useRef, useCallback } from 'react'
 import { Form, Modal, Input, Switch, message } from 'antd';
 
/**
 * 添加审核
 */
 interface Props {
     visible: boolean,
     onCancel: () => void,
 }
 export default function AddAudit(props: Props) {
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
             title='添加审核组'
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
                         { required: true, message: '请输入商户名称' },
                         { pattern: util.reg.numberEnZh, message: '请输入2-8个字符' }
                     ]}
                     label='分组名称'>
                     <Input
                         placeholder='请输入2-8个字符' maxLength={8} />
                 </Form.Item>
                 <Form.Item
                     name='isfen'
                     rules={[
                         { required: true },
                     ]}
                     label='是否分配订单'>
                     <Switch checkedChildren="是" unCheckedChildren="否" />
                 </Form.Item>
             </Form>
         </Modal>
     )
 }
 