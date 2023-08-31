import { Params, redirect } from "react-router-dom";
import { LoginRequest } from "../interfaces/interfaces";
import { store } from "../store/store";
import { authApiSlice } from "../store/slices/auth/auth-api-slice";
import { logout, setCredentials } from "../store/slices/auth/auth-slice";

export async function loginAction({ request, params }: { request: Request, params: Params }) {
    try{
        const formData = await request.formData();
        const eventData: LoginRequest = {
            email: formData.get('email')?.toString()!,
            password: formData.get('password')?.toString()!
        }
        const res = await store
        .dispatch(authApiSlice.endpoints.login.initiate(eventData))
        .unwrap();
        store.dispatch(setCredentials(res))
        return redirect('/');
    }catch(error){
        return error
    }  
}

// { request, params }: { request: Request, params: Params }
export async function logoutAction() {
    try{
        console.log(3333333);
        
        await store
       .dispatch(authApiSlice.endpoints.logout.initiate())
       .unwrap();
        store.dispatch(logout())
        return redirect('/');
    }catch(error){
        return error
    }
}