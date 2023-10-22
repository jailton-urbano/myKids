import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    email: null,
    token: null,
    password: null,
};

export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
    },
});

export const { setEmail, setToken, setPassword } = resetPasswordSlice.actions;
