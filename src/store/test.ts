
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    a: 1,
}

export const test = createSlice({
    name: 'test',
    initialState,
    reducers: {
        updateA: (state) => {
            state.a = 2;
        },
    },
    extraReducers: {
        logout: (state) => {
            console.log('user/logout test')
            state = initialState;
        }
    }
})

export const { updateA, } = test.actions;
export default test.reducer
