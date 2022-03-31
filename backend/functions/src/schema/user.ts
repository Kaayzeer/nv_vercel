export interface User {
    firstname: string;
    surname: string;
    email: string;
    phone: string;
}

export interface RegisterUser {
    firstname: string;
    surname: string;
    phone: string;
    email: string;

    password: string;
    re_password: string;
}