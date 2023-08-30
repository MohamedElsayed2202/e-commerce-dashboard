export interface ILogedInUser{
    id: string;
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

export interface LoginRequest{
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
    userId: string;
    role: string;
}

export interface LoginInputError{
    error: boolean,
    message: string,
}

export interface Auth{
    token: string | null | undefined;
    id: string | null | undefined;
    role: string | null | undefined;
}