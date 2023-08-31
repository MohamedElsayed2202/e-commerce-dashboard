import { Account, LoginRequest, LoginResponse } from "../../../interfaces/interfaces";
import { apiSlice } from "../../api/apiSlice";


export const authApiSlice = apiSlice.injectEndpoints({
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
        }),
        getUserProfile: builder.query<Account, void>({
            query: () => 'auth/user-profile',
            transformResponse: (response: {user: Account}, meta, arg) => response.user,
            // transformErrorResponse: (response, meta, arg) => 'Couldent fetch your profile',
            providesTags: (result, error, arg) => [{type: 'Auth'}] 
        })
    })
})

export const { useLoginMutation } = authApiSlice;

