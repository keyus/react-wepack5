
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router';

export default () => {
    const navigate = useNavigate();
    const goHome = ()=>{
        navigate('/')
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉，您访问的页面不存在。"
            extra={<Button type="primary" onClick={goHome}>返回首页</Button>}
        />
    )
}