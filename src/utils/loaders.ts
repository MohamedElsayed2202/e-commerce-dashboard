import { redirect } from 'react-router-dom';
import { store } from '../store/store';
import { authApiSlice } from '../store/slices/auth/auth-api-slice';
import { setProfile } from '../store/slices/auth/auth-slice';

export const getAuthToken = () => {
    const token = store.getState().auth.token;
    return token;
}

export const indexLoader = async () => {
    const token = getAuthToken();
    if(!token){
        return redirect('/auth');
    }
    const res = await store.dispatch(authApiSlice.endpoints.getUserProfile.initiate()).unwrap();
    store.dispatch(setProfile(res));
    return null;
}