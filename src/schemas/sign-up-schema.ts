import Joi from 'joi';

export const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.string().min(4).required(),
    userType: Joi.string()
})