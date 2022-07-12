export interface OfferConnection {
    fortnox_id: string;
    errand: any;
    offer_link: string;
    signed: false;
    code: string;
}

export interface EmailConnection {
    email: string;

    salesforce_id?: number;
    fortnox_id?: number;
}