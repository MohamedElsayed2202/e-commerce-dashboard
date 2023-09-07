import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Appbar } from "../../../interfaces/interfaces";




const initialState: Appbar = {
    mobileOpen: false,
}

const slice = createSlice({
    name: "appbar",
    initialState,
    reducers: {
        toggleDrawer: (state, {payload}: PayloadAction<void>) => {
            state.mobileOpen = !state.mobileOpen;
        },
    }
})

export const { toggleDrawer } = slice.actions;

const appbarReducer = slice.reducer;
export default appbarReducer;
