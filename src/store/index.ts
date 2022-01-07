import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import user from './user'
import test from './test'

export const store = configureStore({
    reducer: {
        user,
        test,
    },
    middleware: (getDefaultMiddleware) => {
        if (process.env.NODE_ENV === 'development') {
            return getDefaultMiddleware().concat([logger]);
        }
        return getDefaultMiddleware();
    },
    devTools: process.env.NODE_ENV === 'development' ? true : false,
})
export default store
export type RootState = ReturnType<typeof store.getState>
