import { Params, redirect } from "react-router-dom";
import { AddUserRequest, LoginRequest } from "../interfaces/interfaces";
import { store } from "../store/store";
import { authApiSlice } from "../store/slices/auth/auth-api-slice";
import { logout, setCredentials } from "../store/slices/auth/auth-slice";
import { userApiSlice } from "../store/slices/users/user-api-slice";
import { closeModal } from "../store/slices/app/forms-slice";

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

export async function logoutAction() {
    try{        
        await store
       .dispatch(authApiSlice.endpoints.logout.initiate())
       .unwrap();
        store.dispatch(logout())
        return redirect('/');
    }catch(error){
        return error
    }
}

export async function userActions({ request, params }: { request: Request, params: Params }) {
    try{
        const formData = await request.formData();
        const data: AddUserRequest = {
            name: formData.get('name')?.toString()!,
            email: formData.get('email')?.toString()!,
            password: formData.get('password')?.toString()!,
            role: formData.get('role')?.toString()!,
            phone: formData.get('phone')?.toString()!
        }
        if(request.method === "POST"){
            await store
            .dispatch(userApiSlice.endpoints.addUser.initiate(data))
            .unwrap();
            store.dispatch(closeModal());
        }
        return null
    } catch(error){
        return error
    }
}