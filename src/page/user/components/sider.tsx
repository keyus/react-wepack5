
import { Layout, Button, Collapse, List, Tag, Typography, Tooltip } from "antd";
import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import Addbusinessman from "./addBusinessman";
import AddAudit from "./addAudit";

/**
 * 侧边栏
 * 添加分组
 * 添加商户
 */

const { Sider, } = Layout;
const { Panel } = Collapse;
const businessData = [
    { name: '2N1', money: 0, },
    { name: '商户1', money: 1000, },
    { name: '商户2', money: 2000, },
];
const data = [
    { name: '审核组1', num: 12, },
    { name: '审核组2', num: 33, },
];
const zdata = [
    { name: '值班', },
];


export default (): JSX.Element => {
    return (
        <>
            <Sider className="user-side">
                <h1>账号分组</h1>
                <h2><Button type="link"><PlusOutlined />添加分组</Button></h2>
                <Collapse
                    className="user-group"
                    ghost
                    defaultActiveKey={['1', '2', '3']}
                    expandIconPosition='right'
                    bordered={false}>
                    <Panel
                        header="商户"
                        extra={
                            <Button
                                className="add-button"
                                type="link"
                                size="small"><PlusOutlined />添加商户</Button>
                        }
                        key="1">
                        <List
                            split={false}
                            size="small"
                            dataSource={businessData}
                            renderItem={item => {
                                return (
                                    <List.Item className="list-item">
                                        <div className="item-name">{item.name}</div>
                                        <Tooltip title='预付款'><Tag color="gold">{item.money || '不限额'}</Tag></Tooltip>
                                        <Typography.Link><FormOutlined /></Typography.Link>
                                    </List.Item>
                                )
                            }}
                        />
                    </Panel>
                    <Panel
                        header="审核"
                        extra={
                            <Button
                                className="add-button"
                                type="link"
                                size="small"><PlusOutlined />添加分组</Button>
                        }
                        key="2">
                        <List
                            split={false}
                            size="small"
                            dataSource={data}
                            renderItem={item => {
                                return (
                                    <List.Item className="list-item">
                                        <div className="item-name">{item.name}（{item.num}）</div>
                                        <Typography.Link><FormOutlined /></Typography.Link>
                                    </List.Item>
                                )
                            }}
                        />
                    </Panel>
                    <Panel
                        header="值班"
                        key="3">
                        <List
                            split={false}
                            size="small"
                            dataSource={zdata}
                            renderItem={item => {
                                return (
                                    <List.Item className="list-item">
                                        <div className="item-name">{item.name}</div>
                                    </List.Item>
                                )
                            }}
                        />
                    </Panel>

                </Collapse>
            </Sider>


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

        </>
    )
}