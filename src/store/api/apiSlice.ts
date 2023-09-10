import { BaseQueryApi, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { logout, setCredentials } from '../slices/auth/auth-slice';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { redirect } from 'react-router-dom';


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

 
const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> =>{
    let result = await baseQuery(args, api, extraOptions);
    if(result.error?.status === 403 && (result.error.data as any).message){
        const refreshTokenResult = await baseQuery({
            url: 'auth/refresh',
            method: 'POST',
        }, api, extraOptions);
        if(refreshTokenResult.data){
            const {token} = refreshTokenResult.data as {token: string};
            api.dispatch(setCredentials({token}));
            result = await baseQuery(args, api, extraOptions);
        }else{
            console.log(refreshTokenResult.error?.data);
            
            // api.dispatch(logout())
            // redirect('/auth');
        }
    }
    return result;
}


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes : ['Auth', 'Users', 'Products', 'Brands', 'Categories','Orders'],
    endpoints : builder => ({})
});
