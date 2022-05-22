interface Payment{
    payment_id?: string;
    payment_status: "unpaid" | "pending" | "paid";
}

export interface BaseUser {
    firstname?: string;
    surname?: string;
    company?: string;
    email?: string;
    phone?: string;
    user_id?: any; // Reference to user
}

interface Brief{
    business_desc: string;
    business_type: string;
    additional_details?: string;
    country: string;
    names_disliked?: string[];
    keywords: string[];
    maximum_letters: string | number | boolean;
    maximum_words: string | number | boolean;
}

interface ErrandBase{
    type: "buy" | "sell" | "find";
}

export interface BuyDomain extends BaseUser, Payment, ErrandBase{
    // Domain info
    domain: string; 
    budget: number;
    salesforce_id?: string;
}

export interface SellDomain extends BaseUser, Payment, ErrandBase{
    // Domain info
    domains: string[];
    salesforce_id?: string;
    fortnox_customer?: string;
}

export interface FindDomain extends BaseUser, Brief, Payment, ErrandBase{
    // Domain info
    budget: number;
    salesforce_id?: string;
}