import { AddUserRequest, AddUserResponse, ErrorResponse, User } from "../../../interfaces/interfaces";
import { apiSlice } from "../../api/apiSlice";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<User[], void>({
            query: () => 'auth',
            transformResponse: (response: {users: User[]}, meta, args) => response.users,
            transformErrorResponse: (response: ErrorResponse, meta, arg) => response,
            providesTags: (result) => 
                result && result?.length > 0 ? [
                    ...result.map(({_id}) => ({type: 'Users' as const, _id})),
                    {type: 'Users', _id: 'LIST'}
                ] : [
                    {type: 'Users', _id: 'LIST'}
                ]
            
        }),
        addUser : builder.mutation<AddUserResponse, AddUserRequest>({
            query: (data) => ({
                url: 'auth/add-user',
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json"
                }
            }),
            async onQueryStarted(data, {dispatch, queryFulfilled}){
                try{
                    const {data} = await queryFulfilled; 
                    console.log(data);
                    
                    // const postResult = 
                    dispatch(
                        userApiSlice.util.updateQueryData('getUsers', undefined , (draft) => {
                           draft.push(data.user);
                        }) 
                    )
                } catch {}
            }
            
        })
    }),
}); 

export const {useGetUsersQuery} = userApiSlice