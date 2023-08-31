import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Account, Auth } from "../../../interfaces/interfaces";

const initialState: Auth = {
    user: null,
    token: localStorage.getItem('token'),
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload: { token }}: PayloadAction<{token: string}>) => {
            state.token = token;
            localStorage.setItem('token', token);
        },
        setProfile: (state, {payload}: PayloadAction<Account>) => {
            state.user = payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');

        }
    }
}) 

export const { setCredentials, setProfile, logout } = slice.actions;
const authReducer = slice.reducer;
export default authReducer;