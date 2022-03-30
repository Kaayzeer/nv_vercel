interface BaseUser {
    firstname?: string;
    surname?: string;
    email?: string;
    phone?: string;
    user_id?: any; // Reference to user
}

export interface BuyDomain extends BaseUser{
    // Domain info
    domain: string;
}

export interface SellDomain extends BaseUser {
    // Domain info
    domain: string;
    price?: number;
}

export interface OfferDomain extends BaseUser {
    // Domain info
    domain: string;
    price?: number;
}