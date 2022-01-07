import { useNavigate } from 'react-router-dom'
import { CheckCircleFilled } from '@ant-design/icons'
import { Button, } from 'antd'


export default () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }
    return (
        <div className='bind-finish'>
            <CheckCircleFilled className='icon-success' />
            <h2>动态口令设置成功</h2>
            <p>以后登录{process.env.REACT_APP_NAME} 都需要输入Google动态口令哦，手机千万不要丢失！</p>
            <Button type='primary' onClick={goHome}>
                开始使用{process.env.REACT_APP_NAME}
            </Button>
        </div>
    )
}