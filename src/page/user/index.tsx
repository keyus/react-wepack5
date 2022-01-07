import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import SuperAdmin from './SuperAdmin'
import AuditAdmin from './AuditAdmin'
import AuditGroupLeader from './AuditGroupLeader'
import './index.less'


function Index() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/user/super-admin', { replace: true })
    }, []);
    return null;
}

/**
 * 账号管理菜单
 */
export default (): JSX.Element => {
    return (
        <Routes>
            <Route index element={<Index />} />
            {/* 超管 */}
            <Route path='super-admin' element={<SuperAdmin />} />
            {/* 审核-admin */}
            <Route path='audit-admin' element={<AuditAdmin />} />
            {/* 审核-组长 */}
            <Route path='audit-group-leader' element={<AuditGroupLeader />} />
        </Routes>
    )
}
