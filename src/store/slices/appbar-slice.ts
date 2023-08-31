import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Appbar } from "../../interfaces/interfaces";




const initialState: Appbar = {
    mobileOpen: false,
    anchorElUser: null,
}

const slice = createSlice({
    name: "appbar",
    initialState,
    reducers: {
        toggleDrawer: (state, action) => {
            state.mobileOpen = !state.mobileOpen;
        },
        openMenu: (state, {payload}: PayloadAction<HTMLElement>) => {
            state.anchorElUser 
        }
    }
})