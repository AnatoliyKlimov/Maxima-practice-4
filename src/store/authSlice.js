// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    users: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload);
        },
        loginUser: (state, action) => {
            const { emailOrPhone, password } = action.payload;
            const user = state.users.find(
                (user) => user.emailOrPhone === emailOrPhone && user.password === password
            );
            state.isAuthenticated = !!user;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;