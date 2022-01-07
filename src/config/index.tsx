import { ReactComponent as LogoIcon } from '@img/logo.svg'
import { message } from 'antd'

message.config({
    maxCount: 1,
});


export default {
    logo: <LogoIcon />,
}
