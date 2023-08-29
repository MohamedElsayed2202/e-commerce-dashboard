import { createSlice } from "@reduxjs/toolkit";
import { ILogedInUser } from "../../interfaces/interfaces";

const initialState = {
    id: "",
    name: "",
    email: "",
    role: "",
    profile:{
        address: "",
        phone: "",
        image:{
            url: "",
            id: ""
        }
    }
} as ILogedInUser ;

const logedInUserSclice = createSlice({
    name: 'logedInUser',
    initialState,
    reducers: {},
    
})