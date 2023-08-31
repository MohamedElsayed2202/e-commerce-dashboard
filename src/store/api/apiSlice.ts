import { BaseQueryApi, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { logout, setCredentials } from '../slices/auth/auth-slice';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1/',
    credentials: 'include',
    mode: 'cors',
    prepareHeaders: (headers, {getState}) =>{
        const token = (getState() as RootState).auth.token;
        if(token){
            headers.append('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

// MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> =>{
    let result = await baseQuery(args, api, extraOptions);
    if(result.error?.status === 403){
        console.log('refresh token');
        const refreshTokenResult = await baseQuery({
            url: 'auth/refresh',
            method: 'POST',
        }, api, extraOptions);
        console.log(refreshTokenResult);
        if(refreshTokenResult.data){
            const auth = (api.getState() as RootState).auth;
            const {token} = refreshTokenResult.data as {token: string};
            console.log('mmmmmmmmmmmmmmmm', token);
            api.dispatch(setCredentials({id: auth.id!, role: auth.role!, token}));
            result = await baseQuery(args, api, extraOptions);
        }else{
            api.dispatch(logout())
        }
    }
    return result;
}


// baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:8080/api/v1/',
//     prepareHeaders: (headers, {getState}) =>{
//         const token = (getState() as RootState).auth.token;
//         if(token){
//             headers.append('Authorization', `Bearer ${token}`);
//         }
//         return headers;
//     },
// }),

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes : ['Auth', 'User', 'Product', 'Brand', 'Category','Order'],
    endpoints : builder => ({})
});
