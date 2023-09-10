export interface Account{
    name: string;
    email: string;
    role: string;
    profile:{
        address: string;
        phone: string;
        image:{
            url: string;
            id: string;
        }
    }
}

export interface User{
    _id: string;
    name: string;
    email: string;
    role: string;
    profile: {
        phone: string;
        image:{
            url: string
        }
    }
}

export interface LoginRequest{
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
}

export interface LoginInputError{
    error: boolean,
    message: string,
}

export interface AddUserRequest{
    name: string;
    email: string;
    password: string;
    role: string;
    phone: string;
}

export interface AddUserResponse{
    message: string;
    user: User;
}

export interface Auth{
    user: Account | null;
    token: string | null | undefined;
}

export interface Appbar {
    mobileOpen: boolean;
}

export interface ErrorResponse {
    status: number | any;
    data: {
        message: string,
        errors?: any
    }
}


export interface ModalFormHandling {
    type: string;
    isOpen: boolean;
    isEditing: boolean;
    isValid: boolean;
    data: any;
}


export interface AllForms {}