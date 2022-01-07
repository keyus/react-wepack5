
import { createSlice } from '@reduxjs/toolkit'

let localUser: any = localStorage.getItem('user');
try {
    localUser = localUser ? JSON.parse(localUser) : {};
} catch {
    localUser = {};
}

const initialState = {
    ...localUser,
    isLogin: localUser.token,
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signin: (state, action) => {
            Object.assign(state, { ...action.payload, isLogin: true, token: '1' });
            localStorage.setItem('user', JSON.stringify(state));
        },
    },
    /**
     * 上面的reducer action name 为   'user/login'
     * 
     * 扩展的reducer action 不含前缀引导 即   action 'logout' 
     * 如果调用 type: 'logout' 则所有reducer  logout都会执行  
     */
    extraReducers: {
        signout: () => {
            localStorage.removeItem('user');
            return {
                isLogin: false,
            };
        }
    }

})

export const { signin } = user.actions;
export default user.reducer
