import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice';
import authReducer from './slices/auth/auth-slice';
import appbarReducer from './slices/app/appbar-slice';
import modalFormHandlingReducer from './slices/app/forms-slice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        appbar: appbarReducer,
        modalForm: modalFormHandlingReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
