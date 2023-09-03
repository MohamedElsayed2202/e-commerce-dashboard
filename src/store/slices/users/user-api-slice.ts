import { ErrorResponse, User } from "../../../interfaces/interfaces";
import { apiSlice } from "../../api/apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<User[], void>({
            query: () => 'auth',
            transformResponse: (response: {users: User[]}, meta, args) => response.users,
            transformErrorResponse: (response: ErrorResponse, meta, arg) => response,
            providesTags: (result , meta, args) => ['User']
        })
    }),
}); 

export const {useGetUsersQuery} = userApiSlice