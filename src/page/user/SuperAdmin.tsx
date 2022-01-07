
import { Layout, Button, Form, Input, Select, Space, Table, Switch, Modal } from "antd";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import moment from "moment";

import Sider from "./components/sider";

import Addbusinessman from "./components/addBusinessman";
import AddAudit from "./components/addAudit";
import AddUser from "./components/addUser";
import ResetPassword from "./components/resetPassword";
import FreezeUser from "./components/freezeUser";

/**
 * 账号管理：
 * 超级管理员
 */
const data = [
    { name: '审核组1', num: 12, },
    { name: '审核组2', num: 33, },
];
const { Header, Content } = Layout;

export default () => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [total, setTotal] = useState(0);
    const tableChange = (pagination, sorter) => {

    }
    const resetGoogle = useCallback(() => {
        return Modal.confirm({
            title: '确定是否需要重置谷歌验证?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                console.log('OK');
            },
        });
    }, []);

    const column = [
        {
            title: '权限',
            dataIndex: 'role',
            width: 80,
        },
        {
            title: '账号',
            dataIndex: 'username',
            width: 100,
        },
        {
            title: '昵称',
            dataIndex: 'nickname',
            width: 100,
        },
        {
            title: '注册时间',
            dataIndex: 'createTime',
            width: 160,
            sorter: true,
            render(val: string) {
                if (val) return moment().format('YYYY-MM-DD HH:mm:ss');
            }
        },
        {
            title: '登录时间',
            dataIndex: 'loginTime',
            width: 160,
            sorter: true,
            render(val: string) {
                if (val) return moment().format('YYYY-MM-DD HH:mm:ss');
            }
        },
        {
            title: '是否冻结',
            dataIndex: 'createTime',
            width: 78,
            render() {
                return <Switch defaultChecked checkedChildren="是" unCheckedChildren="否" />
            }
        },
        {
            title: '操作',
            dataIndex: 'createTime',
            width: 140,
            render() {
                return (
                    <Space>
                        <Button type="link" onClick={resetGoogle} className="no-pad">重置验证</Button>
                        <Button type="link" className="no-pad">重置密码</Button>
                    </Space>
                )
            }
        },
    ]

    return (
        <Layout className="user-container">
            <Sider />
            <Layout className="user-main">
                <Header className="header">账号列表</Header>
                <Content className="user-main-body">
                    <div className="search-container">
                        <Form layout="inline" initialValues={{
                            role: ''
                        }}>
                            <Form.Item name="role" label='筛选条件'>
                                <Select style={{ width: 120 }}>
                                    <Select.Option value={''}>全部角色</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="username">
                                <Input placeholder="输入账号" style={{ width: '140px' }} />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        查询
                                    </Button>
                                    <Button>重置</Button>
                                </Space>
                            </Form.Item>
                        </Form>
                        <Button className="highlight"><PlusOutlined />添加账号</Button>
                    </div>


                    <Table
                        columns={column}
                        rowKey={util.rowKey}
                        onChange={(pagination, _, sorter) => tableChange(pagination, sorter)}
                        pagination={{
                            current: page,
                            pageSize: size,
                            showQuickJumper: true,
                            showSizeChanger: true,
                            total,
                            showTotal(total) {
                                return `共 ${total} 条记录`;
                            },
                        }}
                        dataSource={[data]} />

                </Content>
            </Layout>

            {/* 添加商户 */}
            {/* <Addbusinessman visible={true} onCancel={()=>{}}/> */}
            {/* 添加审核组 */}
            {/* <AddAudit visible={true} onCancel={()=>{}}/> */}
            {/* 添加账号 */}
            {/* <AddUser visible={true} onCancel={()=>{}}/> */}
            {/* 重置密码 */}
            {/* <ResetPassword visible={true} onCancel={()=>{}}/> */}
            {/* 冻结账号 */}
            {/* <FreezeUser visible={true} onCancel={()=>{}}/> */}

        </Layout>
    )
}