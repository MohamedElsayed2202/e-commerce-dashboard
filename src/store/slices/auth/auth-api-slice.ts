import { createSlice } from "@reduxjs/toolkit";
import { ILogedInUser, LoginRequest, LoginResponse } from "../../../interfaces/interfaces";
import { apiSlice } from "../../api/apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({


    // addTagTypes: ['Auth'],
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        })
    })
})

export const { useLoginMutation } = authApiSlice;

