import Joi from 'joi';

export const UserJoiSchema = Joi.object({
    firstname: Joi.string().alphanum().min(2).required(),
    surname: Joi.string().alphanum().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
});


export const PasswordJoiSchema = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),
}).with('password', 'repeat_password')


export const UserPasswordJoiSchema = UserJoiSchema.concat(PasswordJoiSchema);