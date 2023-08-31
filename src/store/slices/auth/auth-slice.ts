import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Account, Auth } from "../../../interfaces/interfaces";
import { RootState } from "../../store";

// type AuthType = {
//     token: string | null,

// }

const initialState: Auth = {
    user: null,
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id'),
    role: localStorage.getItem('role'),
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload: { token, id, role }}: PayloadAction<{token: string, id: string, role: string}>) => {
            state.token = token;
            state.id = id;
            state.role = role;
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
            localStorage.setItem('role', role);
        },
        setProfile: (state, {payload}: PayloadAction<Account>) => {
            state.user = payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.id = null;
            state.role = null;
        }
    }
}) 

export const { setCredentials, setProfile, logout } = slice.actions;
const authReducer = slice.reducer;
export default authReducer;