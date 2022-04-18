interface BaseUser {
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

export interface BuyDomain extends BaseUser{
    // Domain info
    domain: string; 
    budget: number;
}

export interface SellDomain extends BaseUser {
    // Domain info
    domains: string[];
}

export interface FindDomain extends BaseUser, Brief {
    // Domain info
    budget: number;
}