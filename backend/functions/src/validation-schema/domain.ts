import Joi from 'joi';
import { UserJoiSchema } from './user';

export const BaseUserJoiSchema = UserJoiSchema.keys({
    company: Joi.string(),
})

export const FindJoiSchema = Joi.object({
    business_desc: Joi.string().required(),
    business_type: Joi.string().required(),
    country: Joi.string().required(),
    keywords: Joi.array().items(Joi.string()),

    budget: Joi.number().required()
})

export const SellJoiSchema = Joi.object({
    domains: Joi.array().items(Joi.string()).required()
})

export const BuyJoiSchema = Joi.object({
    domain: Joi.string().required(),
    budget: Joi.number().required()
})
