import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    error: null,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
    serverMessage: null,
    serverStatus: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },

        setError: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },

        userLogin: (state, { payload }) => {
            state.userInfo = payload;
            state.error = null;
            state.loading = false;
        },

        userLogout: (state) => {
            state.loading = false;
            state.error = null;
            state.userInfo = null;
        },

        verificationEmail: (state) => {
            state.userInfo.active = true;
            state.loading = false;
            state.error = null;
        },

        setServerResponseMessage: (state, { payload }) => {
            state.serverMessage = payload;
            state.error = null;
            state.loading = false;
        },

        setServerResponseStatus: (state, { payload }) => {
            state.serverStatus = payload;
            state.error = null;
            state.loading = false;
        },

        stateReset: (state) => {
            state.loading = false;
            state.error = null;
            state.serverMessage = null;
        },

        setUserOrders: (state, { payload }) => {
            state.error = null;
            state.orders = payload;
            state.loading = false;
        },
    },
});

export const {
    setLoading,
    setError,
    setUserOrders,
    userLogin,
    userLogout,
    verificationEmail,
    setServerResponseMessage,
    setServerResponseStatus,
    stateReset,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.user;
