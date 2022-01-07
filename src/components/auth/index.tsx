
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux'
import type { RootState } from '@store'
import { signin } from '@store/user'
import Loading from "./Loading";

export default function Auth({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const user = useSelector((state: RootState) => state.user);
    if (!user.isLogin) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = http.post('/d');
                setLoading(false);
            } catch (error) {
                console.warn(error)
            }
        }
        // getUser();
    }, []);
    if (loading) {
        return <Loading />
    }
    return children;
}

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return {
        signin(data: Obj) {
            dispatch(signin(data));
            navigate('/')
        },
        signout() {
            dispatch({ type: 'signout' });
            navigate('/login')
        }
    }
}