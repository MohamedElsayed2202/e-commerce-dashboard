import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../../interfaces/interfaces";

// type AuthType = {
//     token: string | null,

// }

const initialState: Auth = {
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
        }
    }
}) 

export const { setCredentials } = slice.actions

const authReducer = slice.reducer
export default authReducer

// export const selectCurrentUser = (state: RootState) => state.auth.user