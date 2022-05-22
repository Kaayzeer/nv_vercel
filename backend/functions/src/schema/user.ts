export interface User {
    firstname: string;
    surname: string;
    email: string;
    phone: string;

    salesforce_id?: number;
    fortnox_id?: number;
}

export interface EmailConnection {
    email: string;

    salesforce_id?: number;
    fortnox_id?: number;
}

export interface RegisterUser extends User {
    password: string;
    re_password: string;

    salesforce_id?: number;
    fortnox_id?: number;
}