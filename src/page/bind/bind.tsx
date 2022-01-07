
import { useCallback, useEffect, useState } from 'react'
import { Button, Steps, Modal, Form, Input, Spin, message } from 'antd'
import { AndroidFilled, AppleFilled } from '@ant-design/icons'
import Qrcode from 'qrcode'
import Copy from '@com/copy'
import googleAppLogo from './img/google-app-logo.png'
import googleAndroidQrcode from './img/google-android-qrcode.jpeg'
import googleIosQrcode from './img/google-ios-qrcode.jpeg'

const Step = Steps.Step;

interface Props {
    setPass(key: boolean): void
}
export default (props: Props) => {
    const {
        setPass
    } = props;

    const [loading, setLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [iosVisible, setIosVisible] = useState(false);
    const [andriodVisible, setAndriodVisible] = useState(false);
    const [qrcode, setQrcode] = useState('');
    const toggleIos = useCallback(() => setIosVisible(val => !val), []);
    const toggleAndriod = useCallback(() => setAndriodVisible(val => !val), []);

    useEffect(() => {
        const getImg = async () => {
            const img = await Qrcode.toDataURL('3543543543543543', { width: 300, margin: 1 })
            setQrcode(img)
        }
        getImg();
    }, []);

    const onFinish = useCallback((values) => {
        setSubmitLoading(true);
        console.log(values);
        setTimeout(() => {
            message.success('绑定成功')
            setPass(true);
            setSubmitLoading(false);

        }, 2000);
    }, []);
    return (
        <div className='bind-step'>
            <Steps
                direction="vertical"
                size="small">
                <Step
                    title="下载并安装谷歌验证器APP"
                    description={
                        <div>
                            <p>在手机上安装谷歌验证器 (Google Authenticator)</p>
                            <div className='bind-download'>
                                <div className='it-logo'>
                                    <span><img src={googleAppLogo} width={50} height={50} /></span>
                                    <label>Authenticator</label>
                                </div>
                                <div className='it-center'>
                                    <span className='it-type'>
                                        <span className='block'>
                                            <AppleFilled />IOS
                                        </span>
                                        <em />
                                        <a onClick={toggleIos}>点击使用二维码下载</a>
                                    </span>
                                    <span className='it-type'>
                                        <span className='block'>
                                            <AndroidFilled />Android
                                        </span>
                                        <em />
                                        <a onClick={toggleAndriod}>点击使用二维码下载</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    } />
                <Step
                    title="使用谷歌验证器扫描下面的二维码"
                    description={
                        <div className='bind-qrcode'>
                            <div className='it-img'>
                                <Spin spinning={loading}>
                                    <div className='it-img-bg' style={{ backgroundImage: `url('${qrcode}')` }}></div>
                                </Spin>
                            </div>
                            <p>如果二维码扫描失败，也可以在谷歌验证器中手动输入密钥获取动态口令</p>
                            <p>
                                密钥：{'DFJDSKLFDJKSLAJFKDLSAJ'}
                                <Copy
                                    text={'DFJDSKLFDJKSLAJFKDLSAJ'}
                                    onCopy={() => message.success('复制成功')}>
                                    <a>复制</a>
                                </Copy>
                            </p>
                        </div>
                    } />
                <Step
                    title="输入动态口令"
                    description={
                        <Form
                            layout="inline"
                            initialValues={{
                                username: 'sss',
                                password: 'ddd',
                            }}
                            onFinish={onFinish}
                            style={{ paddingTop: '10px' }}>

                            <Form.Item name='username' noStyle><Input type='hidden' /></Form.Item>
                            <Form.Item name='password' noStyle><Input type='hidden' /></Form.Item>
                            <Form.Item name='code' rules={[{ required: true, message: '请输入动态口令' }]}>
                                <Input
                                    placeholder='输入谷歌验证器中显示的6位数字进行绑定'
                                    maxLength={8}
                                    style={{
                                        width: '320px'
                                    }} />
                            </Form.Item>
                            <Form.Item><Button type="primary" htmlType="submit" loading={submitLoading}>提交</Button></Form.Item>
                        </Form>
                    } />
            </Steps>

            <Modal
                visible={iosVisible}
                footer={null}
                title={<h4 className='center'>苹果下载二维码</h4>}
                mask={false}
                width={350}
                onCancel={toggleIos}
            >
                <div className='download-qrcode'><img src={googleIosQrcode} width={280} /></div>
            </Modal>
            <Modal
                visible={andriodVisible}
                footer={null}
                title={<h4 className='center'>Android下载二维码</h4>}
                mask={false}
                width={350}
                onCancel={toggleAndriod}
            >
                <div className='download-qrcode'><img src={googleAndroidQrcode} width={280} /></div>
            </Modal>
        </div>
    )
}