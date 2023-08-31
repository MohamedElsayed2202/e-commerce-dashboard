import { Params, redirect } from "react-router-dom";
import { LoginRequest } from "../interfaces/interfaces";
import { store } from "../store/store";
import { authApiSlice } from "../store/slices/auth/auth-api-slice";
import { setCredentials } from "../store/slices/auth/auth-slice";

export async function loginAction({ request, params }: { request: Request, params: Params }) {

    try{
        const formData = await request.formData();
        // const data = Object.fromEntries(formData);
        const eventData: LoginRequest = {
            email: formData.get('email')?.toString()!,
            password: formData.get('password')?.toString()!
        }
        const res = await store
        .dispatch(authApiSlice.endpoints.login.initiate(eventData))
        .unwrap();

        console.log(res);
        store.dispatch(setCredentials(res))
        
        // return res
        return redirect('/');
    }catch(error){
        return error
    }
    

}